import z from "zod";
import {Badge} from "@/components/ui/badge";

export const schema = z.object({
    id_don_vi: z.number().optional().nullable(),
    ma_don_vi: z.string().nonempty("Mã đơn vị không được để trống"),
    ten_don_vi: z.string().nonempty("Tên đơn vị không được để trống"),
    gioi_thieu: z.any().optional()
})

export const columns = [
    {
        accessorKey: "ma_don_vi",
        header: "Mã đơn vị",
        cell: ({getValue}: {getValue: ()=> unknown}) => (<Badge variant={"outline"}>{getValue() as string}</Badge>)
    },
    {
        accessorKey: "ten_don_vi",
        header: "Tên đơn vị"
    },
    {
        accessorKey: "gioi_thieu",
        header: "Giới thiệu",
    },
]