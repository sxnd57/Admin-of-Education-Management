import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Users} from "lucide-react";
import AppBreadcrumb from "../../../../components/page-breadcrumb";
import TableHocPhan from "./components/table";

export default function HocPhanPage() {
	return (
		<>
			<AppBreadcrumb/>
			<Card>
				<CardHeader>
					<CardTitle className={'text-lg'}>
						<div className="flex items-center space-x-2">
							<Users/>
							<span>Quản lý thông tin học phần</span>
						</div>
					</CardTitle>
					<CardDescription>Các thông tin học phần được quản lý bởi hệ thống</CardDescription>
				</CardHeader>
				<CardContent>
					<TableHocPhan/>
				</CardContent>
			</Card>
		</>
	)
}