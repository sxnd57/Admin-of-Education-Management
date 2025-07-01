import Link from "next/link";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import * as React from "react";

type GridCardType = {
    title: string,
    description: string,
    icon: React.ElementType,
    href: string,
    color: string,
}

export default function GridCard({items}: { items: GridCardType[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item) => (
                <Link prefetch key={item.title} href={item.href} className="group">
                    <Card
                        className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                        <CardHeader>
                            <div className="flex items-center space-x-3">
                                <div className={`p-2 rounded-lg ${item.color} text-white`}>
                                    <item.icon className="h-6 w-6"/>
                                </div>
                                <CardTitle
                                    className="text-lg group-hover:text-blue-600 transition-colors">{item.title}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-sm text-gray-600">{item.description}</CardDescription>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
    )
}