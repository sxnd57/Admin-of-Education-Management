import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Users} from "lucide-react";
import TableHocKy from "./components/table";
import AppBreadcrumb from "@/components/page-breadcrumb";

export default function HocKyPage() {
    return (
        <>
            <AppBreadcrumb/>
            <Card>
                <CardHeader>
                    <CardTitle className={'text-lg'}>
                        <div className="flex items-center space-x-2">
                            <Users/>
                            <span>Quản lý thông tin học kỳ</span>
                        </div>
                    </CardTitle>
                    <CardDescription>Các thông tin học kỳ được quản lý bởi hệ thống</CardDescription>
                </CardHeader>
                <CardContent>
                    <TableHocKy/>
                </CardContent>
            </Card>
        </>
    )
}