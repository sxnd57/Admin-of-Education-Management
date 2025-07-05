import * as z from "zod";
import {Badge} from "@/components/ui/badge";
import {format} from "date-fns";
import {Calendar} from "lucide-react";

export const schema = z.object({
    id_chung_chi: z.number().optional().nullable(),
    ma_chung_chi: z.string().nonempty("Mã chứng chỉ không được để trống"),
    ten_chung_chi: z.string().nonempty("Tên chứng chỉ không được để trống"),
    mo_ta: z.any().optional()
})

export const columns = [
    {accessorKey: "ma_chung_chi", header: "Mã chứng chỉ"},
    {accessorKey: "ten_chung_chi", header: "Tên chứng chỉ"},
    {accessorKey: "mo_ta", header: "Mô tả"},
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