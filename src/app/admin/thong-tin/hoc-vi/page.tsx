import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Users} from "lucide-react";
import AppBreadcrumb from "@/components/page-breadcrumb";
import TableHocVi from "@/app/admin/thong-tin/hoc-vi/components/table";

export default function HocViPage() {
    return (
        <>
            <AppBreadcrumb/>
            <Card>
                <CardHeader>
                    <CardTitle className={'text-lg'}>
                        <div className="flex items-center space-x-2">
                            <Users/>
                            <span>Quản lý thông tin học vị</span>
                        </div>
                    </CardTitle>
                    <CardDescription>Các thông tin học vị được quản lý bởi hệ thống</CardDescription>
                </CardHeader>
                <CardContent>
                    <TableHocVi/>
                </CardContent>
            </Card>
        </>
    )
}