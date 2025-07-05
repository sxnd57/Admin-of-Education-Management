import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Users} from "lucide-react";
import AppBreadcrumb from "../../../../components/page-breadcrumb";
import TableChucVu from "./components/table";

export default function ChucVuPage() {
	return (
		<>
			<AppBreadcrumb/>
			<Card>
				<CardHeader>
					<CardTitle className={'text-lg'}>
						<div className="flex items-center space-x-2">
							<Users/>
							<span>Quản lý thông tin chức vụ</span>
						</div>
					</CardTitle>
					<CardDescription>Các thông tin chức vụ được quản lý bởi hệ thống</CardDescription>
				</CardHeader>
				<CardContent>
					<TableChucVu/>
				</CardContent>
			</Card>
		</>
	)
}