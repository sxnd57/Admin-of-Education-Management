import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Users} from "lucide-react";
import AppBreadcrumb from "@/components/page-breadcrumb";
import TableDonVi from "@/app/admin/thong-tin/don-vi/components/table";

export default function DonViPage() {
    return (
        <>
            <AppBreadcrumb/>
            <Card>
                <CardHeader>
                    <CardTitle className={'text-lg'}>
                        <div className="flex items-center space-x-2">
                            <Users/>
                            <span>Quản lý thông tin đơn vị</span>
                        </div>
                    </CardTitle>
                    <CardDescription>Các thông tin đơn vị được quản lý bởi hệ thống</CardDescription>
                </CardHeader>
                <CardContent>
                    <TableDonVi/>
                </CardContent>
            </Card>
        </>
    )
}