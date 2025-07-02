import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field } from "@/utils/field.inteface";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import React from "react";

export const fields: Field[] = [
  { key: "mssv", label: "Mã số sinh viên", placeholder: "VD: 21004100" },
  { key: "ho", label: "Họ", placeholder: "VD: Nguyễn Văn" },
  { key: "ten", label: "Tên", placeholder: "VD: Hiếu" },
  { key: "email", label: "Email", placeholder: "VD: 21004100@st.vlute.edu.vn" },
  { key: "sdt", label: "Số điện thoại", placeholder: "Nhập số điện thoại" },
  {
    key: "gioi_tinh",
    label: "Giới tính",
    component: ({ control, fieldKey, error }) => (
      <Controller
        name={fieldKey}
        control={control}
        render={({ field }) => (
          <>
            <Select
              value={field.value?.toString()}
              onValueChange={(val) => field.onChange(Number(val))}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Chọn giới tính" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Giới tính</SelectLabel>
                  <SelectItem value="1">Nam</SelectItem>
                  <SelectItem value="0">Nữ</SelectItem>
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
    ),
  },
  {
    key: "ngay_sinh",
    label: "Ngày sinh",
    component: ({ control, fieldKey, error }) => (
      <Controller
        name={fieldKey}
        control={control}
        render={({ field }) => {
          const [open, setOpen] = React.useState(false);
          const date = field.value ? new Date(field.value) : undefined;
          return (
            <>
              <Popover
                open={open}
                onOpenChange={setOpen}
              >
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-between font-normal"
                  >
                    {date ? format(date, "dd-MM-yyyy") : "Chọn ngày sinh"}
                    <CalendarIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="start"
                >
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
              {error && (
                <span className="text-sm text-red-500">
                  {error.message?.toString()}
                </span>
              )}
            </>
          );
        }}
      />
    ),
  },
];
