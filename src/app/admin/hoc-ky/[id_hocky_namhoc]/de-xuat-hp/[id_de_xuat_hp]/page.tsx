import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Users} from "lucide-react";
import TableDeXuatHPNienKhoa from "./components/table";
import React from "react";

export default function DeXuatHPNienKhoaPage({params}: { params: Promise<{ id_de_xuat_hp: number }> }) {
    const {id_de_xuat_hp: id} = React.use(params);
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle className={'text-lg'}>
                        <div className="flex items-center space-x-2">
                            <Users/>
                            <span>Quản lý thông tin đề xuất học phần theo niên khóa</span>
                        </div>
                    </CardTitle>
                    <CardDescription>Các thông tin đề xuất học phần theo niên khóa được quản lý bởi hệ
                        thống</CardDescription>
                </CardHeader>
                <CardContent>
                    <TableDeXuatHPNienKhoa id={id}/>
                </CardContent>
            </Card>
        </>
    )
}