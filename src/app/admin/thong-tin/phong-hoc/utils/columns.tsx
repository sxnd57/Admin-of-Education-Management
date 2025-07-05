import {ColumnDef} from "@tanstack/react-table";
import z from "zod";
import {Badge} from "@/components/ui/badge";
import {AlertTriangle, Building, CheckCircle, Loader} from "lucide-react";

export const schema = z.object({
    id_phong_hoc: z.number().optional().nullable(),
    ten_phong: z.string().nonempty("Tên phòng không được để trống"),
    loai_phong: z.any().optional(),
    so_luong: z.coerce.number({
        invalid_type_error: "Vui lòng cung cấp số lượng",
        required_error: "Vui lòng cung cấp số lượng"
    }),
    id_toa_nha: z.coerce.number({
        invalid_type_error: "Vui lòng chọn tòa nhà",
        required_error: "Vui lòng chọn tòa nhà",
    }),
    trang_thai: z.any().optional(),
})

type PhongHoc = z.infer<typeof schema> & {
    toa_nha?: {
        ten_toa_nha: string;
    };
};

export const columns: ColumnDef<PhongHoc>[] = [
    {
        accessorKey: "ten_phong",
        header: "Tên phòng",
        cell: ({getValue}: { getValue: () => unknown }) => {
            return (<div className={'font-semibold'}>{getValue() as string}</div>)
        }
    },
    {accessorKey: "so_luong", header: "Số lượng"},
    {accessorKey: "loai_phong", header: "Loại phòng"},
    {
        id: "ten_toa_nha",
        header: "Tên tòa nhà",
        accessorFn: (row) => row.toa_nha?.ten_toa_nha ?? "",
        cell: ({getValue}) => {
            return (
                <Badge
                    variant="outline"
                    className="text-muted-foreground font-normal dark:bg-blue-600"
                >
                    <Building/>
                    {getValue() as string}
                </Badge>
            )
        }
    },
    {
        accessorKey: "trang_thai",
        header: "Trạng thái",
        cell: ({getValue}) => {
            const value = getValue();
            const customClass = [
                {
                    value: "Đang sử dụng",
                    icon: <Loader className="text-blue-500 mr-2"/>,
                    class: 'text-blue-500'
                },
                {
                    value: "Chưa sử dụng",
                    icon: <CheckCircle className="text-green-500 mr-2"/>,
                    class: 'text-green-500'
                },
                {
                    value: "Bảo trì",
                    icon: <AlertTriangle className="text-red-500 mr-2"/>,
                    class: 'text-red-500'
                }
            ];

            const matched = customClass.find((item) => item.value === value);

            return (
                value &&
                <Badge variant="outline" className={'w-30'}>
                    {matched?.icon}
	                <span className={matched?.class}>{value as string}</span>
				</Badge>
            );
        },
    },
]