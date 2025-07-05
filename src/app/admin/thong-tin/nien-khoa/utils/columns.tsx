import {z} from "zod";
import {ColumnDef} from "@tanstack/react-table";

export const schema = z.object({
    id_nien_khoa: z.number().optional().nullable(),
    ma_nien_khoa: z.string().nonempty("Mã niên khóa không được để trống"),
    ten_nien_khoa: z.string().nonempty("Tên niên khóa không được để trống"),
    id_he_dao_tao: z.coerce.number({
        invalid_type_error: "Vui lòng chọn hệ đào tạo",
        required_error: "Vui lòng chọn hệ đào tạo",
    }),
})

type NienKhoa = z.infer<typeof schema> & {
    he_dao_tao?: {
        ten_he_dao_tao: string;
    };
};

export const columns: ColumnDef<NienKhoa>[] = [
    {
        accessorKey: "ma_nien_khoa",
        header: "Mã niên khóa"
    },
    {
        accessorKey: "ten_nien_khoa",
        header: "Tên niên khóa"
    },
    {
        id: "ten_he_dao_tao",
        header: "Tên hệ đào tạo",
        accessorFn: (row) => row.he_dao_tao?.ten_he_dao_tao ?? "",
    },
]