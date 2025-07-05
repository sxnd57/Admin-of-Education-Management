import * as z from "zod";
import {Badge} from "@/components/ui/badge";
import {Calendar} from "lucide-react";
import {format} from "date-fns";

export const schema = z.object({
    id_chuc_vu: z.number().optional().nullable(),
    ten_chuc_vu: z.string().nonempty("Tên chức vụ không được để trống"),
})

export const columns = [
    {
        accessorKey: "ten_chuc_vu",
        header: "Tên chức vụ",
    },
    {
        accessorKey: "ngay_cap_nhat",
        header: "Cập nhật lần cuối",
        cell: ({row}: any) => {
            const updateAt = row.original.ngay_cap_nhat
            return (
                <Badge
                    variant="outline"
                    className="text-dark font-normal dark:bg-blue-600"
                >
                    <Calendar/>
                    {format(updateAt, 'dd-MM-yyyy')}
                </Badge>
            )
        }
    },
]