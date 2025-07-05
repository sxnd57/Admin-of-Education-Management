import * as z from "zod";
import {format} from "date-fns";
import Link from "next/link";

export const schema = z.object({
    id_hocky_namhoc: z.number().optional().nullable(),
    ten_hoc_ky: z.string().nonempty("Mã học kỳ không được để trống"),
    ten_nam_hoc: z.string().nonempty("Tên năm học không được để trống"),
    ngay_bat_dau: z.any().optional(),
    ngay_ket_thuc: z.any().optional(),
    tu_viet_tat: z.string().nonempty("Từ viết tắt không được bỏ trống")
})

export const columns = [
    {
        accessorKey: "ten_hoc_ky",
        header: "Tên học kỳ",
        cell: ({row}: any) => {
            const rowData = row.original
            return (
                <Link href={`/admin/hoc-ky/${rowData.id_hocky_namhoc}`}>
                    <span className={"hover:underline hover:text-blue-500 font-semibold"}>{rowData.ten_hoc_ky}</span>
                </Link>
            )
        }
    },
    {
        id: "thoi_gian_dien_ra",
        header: "Thời gian diễn ra",
        cell: ({row}: any) => {
            const rowData = row.original
            return (
                <span>{format(rowData.ngay_bat_dau, 'dd/MM/yyy') + " - " + format(rowData.ngay_ket_thuc, 'dd/MM/yyy')}</span>
            )
        }
    },
    {
        accessorKey: "tu_viet_tat",
        header: "Từ viết tắt"
    },
]