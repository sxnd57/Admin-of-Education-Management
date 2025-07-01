import {NextResponse} from 'next/server'
import {cookies} from "next/headers";
import apiAuthRequest from "@/app/apiRequest/auth";

export async function POST() {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')


    if (!accessToken) {
        return NextResponse.json(
            {message: "Không nhận được access token"},
            {status: 401}
        )
    }

    try {
        const result = await apiAuthRequest.logoutFromNextServerToServer(accessToken.value)
        const response = NextResponse.json(result.payload, {status: 200})
        response.cookies.delete('accessToken');
        return response;
    } catch (error) {
        console.error('Logout error:', error)
        return NextResponse.json({message: 'Đăng xuất thất bại'}, {status: 500})
    }
}
