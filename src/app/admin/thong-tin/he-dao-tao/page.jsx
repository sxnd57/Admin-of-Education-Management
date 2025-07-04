import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Users} from "lucide-react";
import AppBreadcrumb from "../../../../components/page-breadcrumb";
import TableHeDaoTao from "./components/table";

export default function SinhVienPage() {
	return (
		<>
			<AppBreadcrumb/>
			<Card>
				<CardHeader>
					<CardTitle className={'text-lg'}>
						<div className="flex items-center space-x-2">
							<Users/>
							<span>Quản lý thông tin hệ đào tạo</span>
						</div>
					</CardTitle>
					<CardDescription>Các thông tin hệ đào tạo được quản lý bởi hệ thống</CardDescription>
				</CardHeader>
				<CardContent>
					<TableHeDaoTao/>
				</CardContent>
			</Card>
		</>
	)
}