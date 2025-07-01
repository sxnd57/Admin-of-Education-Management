"use client"
import {z} from "zod";
import {ColumnDef} from "@tanstack/react-table";
import {deleteSinhVien, useSinhVien} from "@/app/admin/thong-tin/sinh-vien/func";
import DataTable2 from "@/components/data-table2";
import {format} from 'date-fns'

export const schema = z.object({
    "id_sinh_vien": z.number(),
    "ho": z.string(),
    "ten": z.string(),
    "email": z.string(),
    "sdt": z.string(),
    "dia_chi": z.string(),
    "cmnd": z.string(),
    "mssv": z.string(),
    "ngay_sinh": z.string(),
    "noi_sinh": z.string(),
    "gioi_tinh": z.boolean(),
})

const columns: ColumnDef<z.infer<typeof schema>>[] = [
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

export default function TableSinhVien() {
    const {data} = useSinhVien();
    return (
        <DataTable2
            data={data?.payload.data || []}
            columns={columns}
            getRowId={(row) => row.id_sinh_vien.toString()}
            onDeleteRow={(id) => {
                deleteSinhVien(id)
            }}
        />)
}
