"use client"

import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {usePathname} from "next/navigation"
import {cn} from "@/lib/utils";
import Link from "next/link";
import React from "react";

export function NavMain({items}: {
    items: {
        title: string
        url: string
        icon?: React.ElementType
    }[]
}) {
    const pathName = usePathname()
    return (
        <SidebarGroup>
            <SidebarGroupContent className="flex flex-col gap-2">
                <SidebarMenu>
                    {items.map((item) => {
                        const isActive = pathName === item.url
                        return (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton
                                    className={cn(
                                        "group flex items-center rounded-md px-3 py-2 text-sm transition-all hover:bg-muted",
                                        isActive
                                            ? "bg-muted text-primary font-medium"
                                            : "text-muted-foreground"
                                    )}
                                    asChild
                                >
                                    <Link href={item.url}>
                                        {item.icon && <item.icon/>}
                                        <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        )
                    })}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}
