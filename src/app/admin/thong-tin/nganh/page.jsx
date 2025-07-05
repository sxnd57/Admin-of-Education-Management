import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Users} from "lucide-react";
import AppBreadcrumb from "../../../../components/page-breadcrumb";
import TableNganh from "./components/table";

export default function NganhPage() {
	return (
		<>
			<AppBreadcrumb/>
			<Card>
				<CardHeader>
					<CardTitle className={'text-lg'}>
						<div className="flex items-center space-x-2">
							<Users/>
							<span>Quản lý thông tin ngành</span>
						</div>
					</CardTitle>
					<CardDescription>Các thông tin ngành được quản lý bởi hệ thống</CardDescription>
				</CardHeader>
				<CardContent>
					<TableNganh/>
				</CardContent>
			</Card>
		</>
	)
}