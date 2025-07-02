"use client";
import {useQuery} from "@tanstack/react-query";
import {toast} from "sonner";
import {deleteSinhVien, getSinhVien,} from "@/app/admin/thong-tin/sinh-vien/utils/func";
import DataTable2 from "@/components/data-table2";
import {columns, schema} from "@/app/admin/thong-tin/sinh-vien/utils/columns";
import ModalDialog from "@/components/modal-dialog";
import {useModalDialogForm} from "@/hooks/use-modal-form";
import {fields} from "@/app/admin/thong-tin/sinh-vien/utils/fields";

export default function TableSinhVien() {
    const {data, refetch} = useQuery({
        queryKey: ["sinh-vien"],
        queryFn: getSinhVien,
    });

    const handleDelete = async (id: string) => {
        try {
            await deleteSinhVien(id);
            toast.success("Xóa thành công");
            await refetch();
        } catch (err: any) {
            toast.error(err.message || "Xóa thất bại");
        }
    };

    const handleCreateOrUpdate = async (values: any) => {
        if (values.id_sinh_vien) {
            console.log("Update", values);
            // gọi API update
        } else {
            console.log("Create", values);
            // gọi API create
        }
    }

    const modal = useModalDialogForm({
        fields,
        schema,
        title: "Thêm sinh viên",
        onSubmit: handleCreateOrUpdate,
    })


    return (
        <>
            <DataTable2
                id={'id_sinh_vien'}
                data={data?.payload.data || []}
                columns={columns}
                onCreate={() => modal.openWithData(undefined, "Thêm sinh viên")}
                onDelete={(id) => handleDelete(id)}
                onUpdate={(student) => {
                    modal.openWithData(student as Record<string, any>, "Cập nhật thông tin sinh viên")
                }}
            />

            <ModalDialog {...modal}/>
        </>
    );
}
