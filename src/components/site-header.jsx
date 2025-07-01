import {SidebarTrigger} from "@/components/ui/sidebar"
import {NavUser} from "@/components/nav-user";
import * as React from "react";

const data = {
	user: {
		name: "sxnd",
		email: "sxnd@gmail.com",
		avatar: "/sxnd.png",
	}
}

export function SiteHeader() {
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
	);
}
