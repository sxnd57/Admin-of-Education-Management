import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Users} from "lucide-react";
import TableDeXuatHP from "./components/table";
import AppBreadcrumb from "../../../../../components/page-breadcrumb";

export default function DeXuatHPPage() {
	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle className={'text-lg'}>
						<div className="flex items-center space-x-2">
							<Users/>
							<span>Quản lý thông tin đề xuất học phần</span>
						</div>
					</CardTitle>
					<CardDescription>Các thông tin đề xuất học phần được quản lý bởi hệ thống</CardDescription>
				</CardHeader>
				<CardContent>
					<TableDeXuatHP/>
				</CardContent>
			</Card>
		</>
	)
}