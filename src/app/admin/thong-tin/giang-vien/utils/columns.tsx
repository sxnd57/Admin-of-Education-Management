import * as z from "zod";
import {format} from "date-fns";
import {Badge} from "@/components/ui/badge";
import {Mail, Phone} from "lucide-react";

export const schema = z.object({
    id_giang_vien: z.number().optional().nullable(),
    ho_ten: z.string().nonempty("Họ tên không được để trống"),
    email: z.string().nonempty("Email không được trống").email("Email không hợp lệ"),
    id_don_vi: z.coerce.number({
        invalid_type_error: "Vui lòng chọn đơn vị",
        required_error: "Vui lòng chọn đơn vị",
    }),
    mat_khau: z
        .string()
        .min(8, {message: "Phải có ít nhất 8 ký tự"})
        .regex(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'), {
            message:
                'Mật khẩu phải có ít nhất 8 ký tự bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt'
        }),
    gioi_tinh: z.any().optional(),
    ngay_sinh: z.any().optional(),
    id_chuc_vu: z.any().optional(),
    id_hoc_vi: z.any().optional(),
    ghi_chu: z.any().optional(),
    sdt: z
        .string()
        .regex(/^(03|05|07|08|09|01[2|6|8|9])[0-9]{8}$/, {
            message: "Số điện thoại không đúng định dạng",
        })
        .or(z.literal(""))
        .optional()
})

export const columns = [
    {
        accessorKey: "ho_ten",
        header: "Họ tên",
    },
    {
        accessorKey: "email",
        header: "Email",
        cell: ({row}: any) => {
            const value = row.original.email;
            return (
                value && (
                    <Badge
                        variant="outline"
                        className="text-muted-foreground font-normal dark:bg-blue-600"
                    >
                        <Mail/>
                        {value}
                    </Badge>
                )
            )
        }
    },
    {
        accessorKey: "sdt",
        header: "SĐT",
        cell: ({row}: any) => {
            const value = row.original.sdt
            return (
                value && (
                    <Badge
                        variant="outline"
                        className="text-muted-foreground font-normal dark:bg-blue-600"
                    >
                        <Phone/>
                        {value}
                    </Badge>
                )
            )
        }
    },
    {
        accessorKey: "ngay_sinh",
        header: "Ngày sinh",
        cell: ({row}: any) => (row.original.ngay_sinh && format(row.original.ngay_sinh, 'dd-MM-yyyy')),
    },
    {
        accessorKey: "noi_sinh",
        header: "Nơi sinh"
    },
    {
        id: "ten_don_vi",
        header: "Đơn vị",
        accessorFn: (row: any) => row.don_vi?.ten_don_vi ?? "",
    },
    {
        id: "ten_chuc_vu",
        header: "Chức vụ",
        accessorFn: (row: any) => row.chuc_vu?.ten_chuc_vu ?? "",
    },
    {
        id: "ten_hoc_vi",
        header: "Học vị",
        accessorFn: (row: any) => row.hoc_vi?.ten_hoc_vi ?? "",
    },
    {
        accessorKey: "ghi_chu",
        header: "Ghi chú"
    },
]