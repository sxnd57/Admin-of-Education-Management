import {useEffect, useState} from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {Controller} from "react-hook-form";
import {Field} from "@/utils/field.inteface";
import http from "@/utils/http";
import {toast} from "sonner";

const ToaNhaSelecter = ({control, fieldKey, error}: any) => {
    const [options, setOptions] = useState<{ id_toa_nha: number, ten_toa_nha: string }[]>([]);

    useEffect(() => {
        const fetchToaNha = async () => {
            const res: { status: number, payload: any } = await http.get('/toa-nha')
            if (!res.payload.status)
                toast.error("Lỗi lấy thông tin tòa nhà !")
            setOptions(res?.payload.data)
        }

        fetchToaNha()
    }, []);

    return (
        <Controller
            name={fieldKey}
            control={control}
            render={({field}) => (
                <>
                    <Select value={field.value?.toString()}
                            onValueChange={(val) => field.onChange(Number(val))}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Chọn tòa nhà"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Tòa nhà</SelectLabel>
                                {options.map((item) => (
                                    <SelectItem key={item.id_toa_nha} value={item.id_toa_nha.toString()}>
                                        {item.ten_toa_nha}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    {error && <span className="text-sm text-red-500">{error.message?.toString()}</span>}
                </>
            )}
        />
    );
}

export const fields: Field[] = [
    {key: "ten_phong", label: "Tên phòng học", placeholder: "VD: C0305"},
    {key: "so_luong", label: "Số lượng", type: 'number', placeholder: "0"},
    {
        key: "loai_phong",
        label: "Loại phòng",
        component: ({control, fieldKey, error}) => (
            <Controller
                name={fieldKey}
                control={control}
                render={({field}) => (
                    <>
                        <Select value={field.value?.toString()} onValueChange={(val) => field.onChange(val)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Chọn loại phòng"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Loại phòng</SelectLabel>
                                    <SelectItem value="LT">LT</SelectItem>
                                    <SelectItem value="TH">TH</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {error && <span className="text-sm text-red-500">{error.message?.toString()}</span>}
                    </>
                )}
            />
        )
    },
    {
        key: "trang_thai",
        label: "Trạng thái",
        component: ({control, fieldKey, error}) => (
            <Controller
                name={fieldKey}
                control={control}
                render={({field}) => (
                    <>
                        <Select value={field.value?.toString()} onValueChange={(val) => field.onChange(val)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Chọn trạng thái"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Giới tính</SelectLabel>
                                    <SelectItem value="Chưa sử dụng">Chưa sử dụng</SelectItem>
                                    <SelectItem value="Đang sử dụng">Đang sử dụng</SelectItem>
                                    <SelectItem value="Bảo trì">Bảo trì</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {error && <span className="text-sm text-red-500">{error.message?.toString()}</span>}
                    </>
                )}
            />
        )
    },
    {
        key: "id_toa_nha",
        label: "Toàn nhà",
        component: ToaNhaSelecter
    },
]