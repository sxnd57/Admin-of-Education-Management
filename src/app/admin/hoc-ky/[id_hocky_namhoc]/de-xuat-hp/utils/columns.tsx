import * as z from "zod";
import {Badge} from "@/components/ui/badge";
import {Calendar} from "lucide-react";
import {format} from "date-fns";
import Link from "next/link";

export const schema = z.object({
    id_de_xuat_hp: z.number().optional().nullable(),
    ten_dot: z.string().nonempty("Mã học kỳ không được để trống"),
})

export const columns = [
    {
        accessorKey: "ten_dot",
        header: "Tên học kỳ",
        cell: ({row}: any) => {
            const rowData = row.original
            return (
                <Link href={`/admin/hoc-ky/${rowData.id_hocky_namhoc}/de-xuat-hp/${rowData.id_de_xuat_hp}`}>
                    <span className={"hover:underline hover:text-blue-500 font-semibold"}>{rowData.ten_dot}</span>
                </Link>
            )
        }
    },
    {
        id: "hocky_namhoc",
        header: "Học kỳ - năm học",
        accessorFn: (row: any) => row.hocky_namhoc?.ten_hoc_ky ?? "",
    },
    {
        accessorKey: "ngay_cap_nhat",
        header: "Cập nhật lần cuối",
        cell: ({getValue}: { getValue: () => unknown }) => {
            return (
                <Badge
                    variant="outline"
                    className="text-dark font-normal dark:bg-blue-600"
                >
                    <Calendar/>
                    {format(getValue() as string, 'dd-MM-yyyy')}
                </Badge>
            )
        }
    },
]