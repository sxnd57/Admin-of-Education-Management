"use client"

import * as React from "react"
import {IconSettings,} from "@tabler/icons-react"
import {NavMain} from "@/components/nav-main"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link";
import Image from "next/image";
import {MonitorCog} from "lucide-react";


const basePath = '/admin';

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Quản lý thông tin",
            url: `${basePath}/thong-tin`,
            icon: MonitorCog,
        },
        {
            title: "Quản lý học kỳ",
            url: `${basePath}/hoc-ky`,
            icon: IconSettings,
        }
    ]
}

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <Link href="/" className="flex items-center gap-2" passHref>
                            <SidebarMenuButton asChild>
                                <div className="data-[slot=sidebar-menu-button]:!p-1.5 flex items-center gap-2">
                                    <Image src={'/vlute.png'} alt={"VLUTE"} width={32} height={32}/>
                                    <span className="text-base font-semibold">QUẢN LÝ ĐÀO TẠO</span>
                                </div>
                            </SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain}/>
            </SidebarContent>
            <SidebarFooter>
                <span className={'font-bold text-sm'}>&copy;2025 sxnd</span>
            </SidebarFooter>
        </Sidebar>
    )
}
