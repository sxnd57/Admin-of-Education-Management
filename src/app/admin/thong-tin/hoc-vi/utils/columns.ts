import z from "zod";

export const schema = z.object({
    id_hoc_vi: z.number().optional().nullable(),
    ten_viet_tat: z.string().nonempty("Tên viết tắt không được để trống"),
    ten_hoc_vi: z.string().nonempty("Tên học vị không được để trống"),
})

export const columns = [
    {accessorKey: "ten_viet_tat", header: "Tên viết tắt"},
    {accessorKey: "ten_hoc_vi", header: "Tên học vị"},
]