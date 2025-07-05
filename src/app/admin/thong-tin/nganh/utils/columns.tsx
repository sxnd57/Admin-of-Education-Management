import * as z from "zod";
import {Badge} from "@/components/ui/badge";

export const schema = z.object({
    id_nganh: z.number().optional().nullable(),
    ma_nganh: z.string().nonempty("Mã ngành không được để trống"),
    ten_nganh: z.string().nonempty("Tên ngành không được để trống"),
    id_don_vi: z.coerce.number({
        invalid_type_error: "Vui lòng chọn đơn vị",
        required_error: "Vui lòng chọn đơn vị",
    }),
    id_he_dao_tao: z.coerce.number({
        invalid_type_error: "Vui lòng chọn hệ đào tạo",
        required_error: "Vui lòng chọn hệ đào tạo",
    }),
})

export const columns = [
    {
        accessorKey: "ma_nganh",
        header: "Mã ngành",
        cell: ({getValue}: { getValue: () => unknown }) => (<Badge variant={"outline"}>{getValue() as string}</Badge>)
    },
    {
        accessorKey: "ten_nganh",
        header: "Tên ngành"
    },
    {
        id: "he_dao_tao_ten_he_dao_tao",
        header: "Tên hệ đào tạo",
        accessorFn: (row: any) => row.he_dao_tao?.ten_he_dao_tao ?? "",
    },
    {
        id: "don_vi_ten_don_vi",
        header: "Tên đơn vị",
        accessorFn: (row: any) => row.don_vi?.ten_don_vi ?? "",
    },
]