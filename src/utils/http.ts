import envConfig from "@/env.config";

type CustomOptions = RequestInit & {
    baseUrl?: string | undefined
}

class HttpError extends Error {
    status: number
    payload: any

    constructor({status, payload}: { status: number, payload: any }) {
        super('Http Error');
        this.status = status;
        this.payload = payload;
    }
}

class AccessToken {
    private token = ''

    get value(): string {
        return this.token;
    }

    set value(value: string) {
        if (typeof window === undefined) {
            throw new Error('Cannot set token on server side');
        }
        this.token = value;
    }
}

export const clientAccessToken = new AccessToken();

const request = async <Response>(method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH', url: string, options?: CustomOptions | undefined) => {
    const body = options?.body ? JSON.stringify(options.body) : undefined;
    const baseHeader = {
        'Content-Type': 'application/json',
        'Authorization': clientAccessToken?.value ? `Bearer ${clientAccessToken?.value}` : '',
    }
    const baseUrl = options?.baseUrl === undefined ? envConfig.NEXT_PUBLIC_API_ENDPOINT : options.baseUrl

    const fullUrl = url.startsWith('/') ? `${baseUrl}${url}` : `${baseUrl}/${url}`

    const res = await fetch(fullUrl, {
        ...options,
        headers: {
            ...baseHeader,
            ...options?.headers
        },
        body,
        method
    })
    const payload: Response = await res.json()
    const data = {
        status: res.status,
        payload,
    }
    if (!res.ok) {
        console.log(data)
        throw new HttpError(data)
    }

    return data
}

const http = {
    get<Response>(url: string, options?: Omit<CustomOptions, 'body'> | undefined) {
        return request<Response>('GET', url, options)
    },
    post<Response>(url: string, body: any, options?: Omit<CustomOptions, 'body'> | undefined) {
        return request<Response>('POST', url, {...options, body})
    },
    path<Response>(url: string, body: any, options?: Omit<CustomOptions, 'body'> | undefined) {
        return request<Response>('PATCH', url, {...options, body})
    },
    delete<Response>(url: string, body: any, options?: Omit<CustomOptions, 'body'> | undefined) {
        return request<Response>('DELETE', url, {...options, body})
    }
}

export default http