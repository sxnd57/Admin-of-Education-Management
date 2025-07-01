import {NextRequest, NextResponse} from 'next/server'

const privatePath = ['/admin']
const authPath = ['/auth/login']

export function middleware(request: NextRequest) {
    const {pathname} = request.nextUrl
    const accessToken = request.cookies.get('accessToken')?.value

    if (privatePath.some(path => pathname.startsWith(path)) && !accessToken) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }

    if (authPath.some(path => pathname.startsWith(path)) && accessToken) {
        return NextResponse.redirect(new URL('/admin', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/admin/:path*',
        '/auth/login'
    ],
}