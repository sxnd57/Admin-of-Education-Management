import {useState} from "react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {Calendar as CalendarIcon} from "lucide-react";
import {Calendar} from "@/components/ui/calendar";
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
import {format} from "date-fns";
import {ChucVuSelectect, DonViSelectect, HocViSelectect} from "@/app/selector/selectors";
import {Field} from "@/utils/field.inteface";

export const fieldsUpdate: Field[] = [
    {key: "ho_ten", label: "Họ tên", placeholder: "Nguyễn Văn A"},
    {key: "email", label: "Email", type: "email", placeholder: "anv@gmail.com"},
    {key: "sdt", label: "Số điện thoại", placeholder: "Nhập số điện thoại"},
    {
        key: "gioi_tinh",
        label: "Giới tính",
        component: ({control, fieldKey, error}: any) => (
            <Controller
                name={fieldKey}
                control={control}
                render={({field}) => (
                    <>
                        <Select value={field.value?.toString()} onValueChange={(val) => field.onChange(Number(val))}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Chọn giới tính"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Giới tính</SelectLabel>
                                    <SelectItem value="1">Nam</SelectItem>
                                    <SelectItem value="0">Nữ</SelectItem>
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
        key: "ngay_sinh",
        label: "Ngày sinh",
        component: ({control, fieldKey, error}: any) => (
            <Controller
                name={fieldKey}
                control={control}
                render={({field}) => {
                    const [open, setOpen] = useState(false);
                    const date = field.value
                        ? new Date(field.value)
                        : undefined;
                    return (
                        <>
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" className="w-full justify-between font-normal">
                                        {date ? format(date, 'dd-MM-yyyy') : "Chọn ngày sinh"}
                                        <CalendarIcon/>
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        captionLayout="dropdown"
                                        onSelect={(d) => {
                                            field.onChange(format(d as Date, "yyyy-MM-dd"));
                                            setOpen(false);
                                        }}
                                    />
                                </PopoverContent>
                            </Popover>
                            {error && <span className="text-sm text-red-500">{error.message?.toString()}</span>}
                        </>
                    );
                }}
            />
        )
    },

    {
        key: "id_don_vi",
        label: "Đơn vị",
        component: DonViSelectect
    },

    {
        key: "id_chuc_vu",
        label: "Chức vụ",
        component: ChucVuSelectect
    },

    {
        key: "id_hoc_vi",
        label: "Học vị",
        component: HocViSelectect
    },

    {key: "ghi_chu", label: "Ghi chú", placeholder: "Ghi chú..."}
];