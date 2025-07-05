import * as z from "zod";

export const schema = z.object({
    id_hoc_phan: z.number().optional().nullable(),
    ma_hoc_phan: z.string().nonempty("Mã học phần không được để trống"),
    ten_hoc_phan: z.string().nonempty("Tên học phần không được để trống"),
    tin_chi_lt: z.any().optional(),
    tin_chi_th: z.any().optional(),
})

export const columns = [
    {
        accessorKey: "ma_hoc_phan",
        header: "Mã học phần",
    },
    {
        accessorKey: "ten_hoc_phan",
        header: "Tên học phần",
    },
    {accessorKey: "tin_chi_lt", header: "Tín chỉ lý thuyết"},
    {accessorKey: "tin_chi_th", header: "Tín chỉ thực hành"},
]