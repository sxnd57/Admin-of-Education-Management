import * as z from "zod";
import {Building, Calendar} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {format} from "date-fns";

export const schema = z.object({
    id_toa_nha: z.number().optional().nullable(),
    ten_toa_nha: z.string().nonempty("Mã tòa nhà không được để trống"),
})

export const columns = [
    {
        accessorKey: "ten_toa_nha",
        header: "Tên tòa nhà",
        cell: ({getValue}: { getValue: () => unknown }) => {
            const value = getValue() as string;
            return (
                <Badge
                    variant="outline"
                    className="text-blue-700 font-semibold dark:bg-blue-600"
                >
                    <Building/>
                    {value}
                </Badge>
            )
        }
    },
    {
        accessorKey: "ngay_tao",
        header: "Ngày tạo",
        cell: ({getValue}: { getValue: () => unknown }) => {
            const value = getValue() as string;
            return (
                <Badge
                    variant="outline"
                    className="text-dark font-normal dark:bg-blue-600"
                >
                    <Calendar/>
                    {format(value,'dd-MM-yyyy')}
                </Badge>
            )
        }
    },
    {
        accessorKey: "ngay_cap_nhat",
        header: "Ngày cập nhật",
        cell: ({getValue}: { getValue: () => unknown }) => {
            const value = getValue() as string;
            return (
                <Badge
                    variant="outline"
                    className="text-dark font-normal dark:bg-blue-600"
                >
                    <Calendar/>
                    {format(value,'dd-MM-yyyy')}
                </Badge>
            )
        }
    },
]