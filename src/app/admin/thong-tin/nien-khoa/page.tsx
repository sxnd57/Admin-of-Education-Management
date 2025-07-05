import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Users} from "lucide-react";
import AppBreadcrumb from "@/components/page-breadcrumb";
import TableNienKhoa from "@/app/admin/thong-tin/nien-khoa/components/table";

export default function NienKhoaPage() {
    return (
        <>
            <AppBreadcrumb/>
            <Card>
                <CardHeader>
                    <CardTitle className={'text-lg'}>
                        <div className="flex items-center space-x-2">
                            <Users/>
                            <span>Quản lý thông tin niên khóa</span>
                        </div>
                    </CardTitle>
                    <CardDescription>Các thông tin niên khóa được quản lý bởi hệ thống</CardDescription>
                </CardHeader>
                <CardContent>
                    <TableNienKhoa/>
                </CardContent>
            </Card>
        </>
    )
}