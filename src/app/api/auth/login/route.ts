import {NextResponse} from "next/server";

export async function POST(request: Request) {
    const data = await request.json();
    const accessToken = data.accessToken;
    if (!accessToken) {
        return NextResponse.json(
            {message: "Không có access token"},
            {status: 401}
        )
    }
    const response = NextResponse.json({message: 'Đăng nhập thành công'})

    response.cookies.set({
        name: 'accessToken',
        value: accessToken,
        httpOnly: true,
        path: '/',
        secure: process.env.NEXT_APP === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24
    });

    return response;
}