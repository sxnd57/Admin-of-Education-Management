import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Users} from "lucide-react";
import AppBreadcrumb from "../../../../components/page-breadcrumb";
import TableChungChi from "./components/table";

export default function ChungChiPage() {
	return (
		<>
			<AppBreadcrumb/>
			<Card>
				<CardHeader>
					<CardTitle className={'text-lg'}>
						<div className="flex items-center space-x-2">
							<Users/>
							<span>Quản lý thông tin chứng chỉ</span>
						</div>
					</CardTitle>
					<CardDescription>Các thông tin chứng chỉ được quản lý bởi hệ thống</CardDescription>
				</CardHeader>
				<CardContent>
					<TableChungChi/>
				</CardContent>
			</Card>
		</>
	)
}