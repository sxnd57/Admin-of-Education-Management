import React, {useEffect, useState} from "react";
import http from "@/utils/http";
import {toast} from "sonner";
import {Controller} from "react-hook-form";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

export const DonViSelectect = ({control, fieldKey, error}: any) => {
    const [options, setOptions] = useState<{ id_don_vi: number, ten_don_vi: string }[]>([]);

    useEffect(() => {
        const fetchDonVi = async () => {
            const res: { status: number, payload: any } = await http.get('/don-vi')
            if (!res.payload.status)
                toast.error('Lỗi khi lấy dữ liệu đơn vị !')
            setOptions(res.payload.data)
        }

        fetchDonVi()
    }, []);

    return (
        <Controller
            name={fieldKey}
            control={control}
            render={({field}) => (
                <>
                    <Select value={field.value?.toString()} onValueChange={(val) => field.onChange(Number(val))}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Chọn đơn vị"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Đơn vị</SelectLabel>
                                {options.map((item) => (
                                    <SelectItem key={item.id_don_vi} value={item.id_don_vi.toString()}>
                                        {item.ten_don_vi}
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


export const HeDaoTaoSelect = ({control, fieldKey, error}: any) => {
    const [options, setOptions] = useState<{ id_he_dao_tao: number, ten_he_dao_tao: string }[]>([]);

    useEffect(() => {
        const fetchHeDaoTao = async () => {
            const res: { status: number, payload: any } = await http.get('/he-dao-tao')
            if (!res.payload.status)
                toast.error('Lỗi khi lấy dữ liệu hệ đào tạo !')
            setOptions(res.payload.data)
        }

        fetchHeDaoTao()
    }, []);

    return (
        <Controller
            name={fieldKey}
            control={control}
            render={({field}) => (
                <>
                    <Select
                        value={field.value?.toString()}
                        onValueChange={(val) => field.onChange(Number(val))}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Chọn hệ đào tạo"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Hệ đào tạo</SelectLabel>
                                {options.map((item) => (
                                    <SelectItem
                                        key={item.id_he_dao_tao}
                                        value={item.id_he_dao_tao.toString()}
                                    >
                                        {item.ten_he_dao_tao}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    {error && (
                        <span className="text-sm text-red-500">
                            {error.message?.toString()}
                        </span>
                    )}
                </>
            )}
        />
    );
};

export const ChucVuSelectect = ({control, fieldKey, error}: any) => {
    const [options, setOptions] = useState<{ id_chuc_vu: number, ten_chuc_vu: string }[]>([]);

    useEffect(() => {
        const fetchChucVu = async () => {
            const res: { status: number, payload: any } = await http.get('/chuc-vu')
            if (!res.payload.status)
                toast.error('Lỗi khi lấy dữ liệu chức vụ !')
            setOptions(res.payload.data)
        }

        fetchChucVu()
    }, []);

    return (
        <Controller
            name={fieldKey}
            control={control}
            render={({field}) => (
                <>
                    <Select value={field.value?.toString()} onValueChange={(val) => field.onChange(val)}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Chọn chức vụ"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Chức vụ</SelectLabel>
                                {options.map((item) => (
                                    <SelectItem key={item.id_chuc_vu} value={item.id_chuc_vu.toString()}>
                                        {item.ten_chuc_vu}
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

export const HocViSelectect = ({control, fieldKey, error}: any) => {
    const [options, setOptions] = useState<{ id_hoc_vi: number, ten_hoc_vi: string }[]>([]);

    useEffect(() => {
        const fetchHocVi = async () => {
            const res: { status: number, payload: any } = await http.get('/hoc-vi')
            if (!res.payload.status)
                toast.error('Lỗi khi lấy dữ liệu học vị !')
            setOptions(res.payload.data)
        }

        fetchHocVi()
    }, []);

    return (
        <Controller
            name={fieldKey}
            control={control}
            render={({field}) => (
                <>
                    <Select value={field.value?.toString()} onValueChange={(val) => field.onChange(val)}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Chọn học vị"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Học vị</SelectLabel>
                                {options.map((item) => (
                                    <SelectItem key={item.id_hoc_vi} value={item.id_hoc_vi.toString()}>
                                        {item.ten_hoc_vi}
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