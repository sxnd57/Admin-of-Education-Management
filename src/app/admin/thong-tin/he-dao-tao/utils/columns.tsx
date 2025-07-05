import * as z from "zod";

export const schema = z.object({
	id_he_dao_tao: z.number().optional().nullable(),
	ma_he_dao_tao: z.string().nonempty("Mã hệ đào tạo không được để trống"),
	ten_he_dao_tao: z.string().nonempty("Tên hệ đào tạo không được để trống"),
})

export const columns = [
	{accessorKey: "ma_he_dao_tao", header: "Mã hệ đào tạo"},
	{accessorKey: "ten_he_dao_tao", header: "Tên hệ đào tạo"},
]