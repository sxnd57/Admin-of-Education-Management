import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Users} from "lucide-react";
import AppBreadcrumb from "../../../../components/page-breadcrumb";
import TableHeDaoTao from "./components/table";

export default function HeDaoTaoPage() {
	return (
		<>
			<AppBreadcrumb/>
			<Card>
				<CardHeader>
					<CardTitle className={'text-lg'}>
						<div className="flex items-center space-x-2">
							<Users/>
							<span>Quản lý thông tin giảng viên</span>
						</div>
					</CardTitle>
					<CardDescription>Các thông tin giảng viên được quản lý bởi hệ thống</CardDescription>
				</CardHeader>
				<CardContent>
					<TableHeDaoTao/>
				</CardContent>
			</Card>
		</>
	)
}