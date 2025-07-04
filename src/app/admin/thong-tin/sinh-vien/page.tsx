import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Users} from "lucide-react";
import TableSinhVien from "@/app/admin/thong-tin/sinh-vien/component/table";
import AppBreadcrumb from "@/components/page-breadcrumb";

export default function SinhVienPage() {
    return (
        <>
            <AppBreadcrumb/>
            <Card>
                <CardHeader>
                    <CardTitle className={'text-lg'}>
                        <div className="flex items-center space-x-2">
                            <Users/>
                            <span>Quản lý thông tin sinh viên</span>
                        </div>
                    </CardTitle>
                    <CardDescription>Các thông tin sinh viên được quản lý bởi hệ thống</CardDescription>
                </CardHeader>
                <CardContent>
                    <TableSinhVien/>
                </CardContent>
            </Card>
        </>
    )
}