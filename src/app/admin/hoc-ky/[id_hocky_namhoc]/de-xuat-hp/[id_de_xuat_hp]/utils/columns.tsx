import * as z from "zod";
import {Badge} from "@/components/ui/badge";
import {Calendar} from "lucide-react";
import {format} from "date-fns";

export const schema = z.object({
    id_de_xuat_hp_nien_khoa: z.number().optional().nullable(),
    id_nien_khoa: z.coerce.number({
        invalid_type_error: "Vui lòng chọn niên khóa",
        required_error: "Vui lòng chọn niên khóa",
    }),
    ngay_bd: z
        .string({
            required_error: "Ngày bắt đầu không được để trống",
        })
        .refine((val) => !isNaN(Date.parse(val)), {
            message: "Ngày không hợp lệ",
        }),
    ngay_kt: z
        .string({
            required_error: "Ngày kết thúc không được để trống",
        })
        .refine((val) => !isNaN(Date.parse(val)), {
            message: "Ngày không hợp lệ",
        })
})

export const columns = [
    {
        id: "nien_khoa",
        header: "Niên khóa",
        accessorFn: (row: any) => {
            const nk = row.nien_khoa;
            return nk?.ten_nien_khoa && nk?.ma_nien_khoa
                ? `${nk.ten_nien_khoa} - ${nk.ma_nien_khoa}`
                : "";
        },
    },
    {
        accessorKey: "ngay_bd",
        header: "Ngày bắt đầu",
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
    {
        accessorKey: "ngay_kt",
        header: "Ngày kết thúc",
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