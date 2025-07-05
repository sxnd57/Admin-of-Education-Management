import {NienKhoaSelectect} from "@/app/selector/selectors";
import {Controller} from "react-hook-form";
import {useState} from "react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {format} from "date-fns";
import {CalendarIcon} from "lucide-react";
import {Calendar} from "@/components/ui/calendar";

export const fields = [
    {
        key: "id_nien_khoa",
        label: "Niên khóa",
        component: NienKhoaSelectect
    },
    {
        key: "ngay_bd",
        label: "Ngày bắt đầu",
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
                                        {date ? format(date, 'dd-MM-yyyy') : "Chọn ngày bắt đầu"}
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
        key: "ngay_kt",
        label: "Ngày kết thúc",
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
                                        {date ? format(date, 'dd-MM-yyyy') : "Chọn ngày kết thúc"}
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
]