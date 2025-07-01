import http from "@/utils/http";
import {LoginResType, LoginSchemaType} from "@/app/schemaValidation/auth.schema";

const apiAuthRequest = {
    login: (body: LoginSchemaType) => http.post<LoginResType>('/auth/login', body),
    authLogin: (body: { accessToken: string }) => http.post('/api/auth/login', body, {
        baseUrl: ''
    }),
    logoutFromNextServerToServer: (accessToken: string) => http.post('/auth/logout', null, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }),
    logoutFromClientToNextServer: () => http.post('/api/auth/logout', null, {
        baseUrl: ''
    })
}

export default apiAuthRequest

