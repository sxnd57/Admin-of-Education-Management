import {ColumnDef} from "@tanstack/react-table";
import {z} from "zod";
import {format} from "date-fns";

export const schema = z.object({
    id_sinh_vien: z.number().optional().nullable(),
    mssv: z.string().nonempty("Mã số sinh viên không được để trống"),
    ho: z.string().nonempty("Họ không được để trống"),
    ten: z.string().nonempty("Tên không được để trống"),
    email: z.string().nonempty("Email không được trống").email("Email không hợp lệ"),
    gioi_tinh: z.any().optional(),
    ngay_sinh: z.any().optional(),
    cmnd: z.any().optional(),
    noi_sinh: z.any().optional(),
    dia_chi: z.any().optional(),
    ghi_chu: z.any().optional(),
    sdt: z
        .string()
        .regex(/^(03|05|07|08|09|01[2|6|8|9])[0-9]{8}$/, {
            message: "Số điện thoại không đúng định dạng",
        })
        .or(z.literal(""))
        .optional()
        .nullable(),
})


export const columns: ColumnDef<z.infer<typeof schema>>[] = [
    {
        accessorKey: "mssv",
        header: "MSSV",
    },
    {
        id: 'ho_ten',
        header: "Họ tên",
        accessorFn: (row) => row.ho + " " + row.ten,
    },
    {
        accessorKey: "gioi_tinh",
        header: "Giới tính",
        cell: ({row}) => (row.original.gioi_tinh ? "Nam" : 'Nữ')
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "sdt",
        header: "SĐT",
    },
    {
        accessorKey: "dia_chi",
        header: "Địa chỉ"
    },
    {
        accessorKey: "cmnd",
        header: "CCCD"
    },
    {
        accessorKey: "ngay_sinh",
        header: "Ngày sinh",
        cell: ({row}) => format(new Date(row.original.ngay_sinh), 'dd-MM-yyyy')
    },
    {
        accessorKey: "noi_sinh",
        header: "Nơi sinh"
    },
]