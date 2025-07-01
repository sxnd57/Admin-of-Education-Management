"use client"
import React, {useState} from "react";
import {clientAccessToken} from "@/utils/http";

export default function SessionProvider({children, initAccessToken = ''}: {
    children: React.ReactNode,
    initAccessToken?: string
}) {
    useState(() => {
        if (typeof window !== "undefined") {
            clientAccessToken.value = initAccessToken;
        }
    })
    return (<>{children}</>)
}
