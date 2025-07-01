"use client"
import {SidebarTrigger} from "@/components/ui/sidebar"
import {NavUser} from "@/components/nav-user";
import {useEffect, useState} from "react";
import accountApiRequest from "@/app/apiRequest/account";

interface ProfileResponse {
    payload: {
        data: {
            ho_ten: string;
            email: string;
        };
    };
}

interface User {
    ho_ten?: string;
    email?: string;
}

export function SiteHeader() {
    const [user, setUser] = useState<User | null>(null)
    useEffect(() => {
        const fetchUser = async () => {
            const result = await accountApiRequest.me() as ProfileResponse
            setUser(result.payload.data)
        }
        fetchUser()
    }, []);
    const data = {
        user: {
            name: user?.ho_ten ?? '',
            email: user?.email ?? '',
            avatar: "",
        }
    }
    return (
        <header
            className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
            <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
                <SidebarTrigger className="-ml-1"/>
                <div className="ml-auto flex items-center gap-2">
                    <NavUser user={data.user}/>
                </div>
            </div>
        </header>
    )
}
