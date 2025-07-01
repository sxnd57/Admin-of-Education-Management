import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Toaster} from "@/components/ui/sonner";
import SessionProvider from "@/providers/session.provider";
import React from "react";
import {cookies} from "next/headers";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Quản lý đào tạo - VLUTE",
    description: "Ứng dụng quản lý đào tạo trường đại học Sư phạm Kỹ thuật Vĩnh Long",
};

export default async function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    const cookie = await cookies()
    const accessToken = cookie.get('accessToken')?.value
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <SessionProvider initAccessToken={accessToken}>
            {children}
            <Toaster richColors/>
        </SessionProvider>
        </body>
        </html>
    );
}
