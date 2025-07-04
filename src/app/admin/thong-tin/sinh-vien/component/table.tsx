"use client";
import {useQuery} from "@tanstack/react-query";
import {toast} from "sonner";
import {deleteSinhVien, getSinhVien, patchSinhVien, postSinhVien,} from "@/app/admin/thong-tin/sinh-vien/utils/func";
import DataTable2 from "@/components/data-table2";
import {columns, schema} from "@/app/admin/thong-tin/sinh-vien/utils/columns";
import ModalDialog from "@/components/modal-dialog";
import {useModalDialogForm} from "@/hooks/use-modal-form";
import {fieldsAdd} from "@/app/admin/thong-tin/sinh-vien/utils/fieldsAdd";
import {fieldsUpdate} from "@/app/admin/thong-tin/sinh-vien/utils/fieldsUpdate";

export default function TableSinhVien() {
    const {data, refetch} = useQuery({
        queryKey: ["sinh-vien"],
        queryFn: getSinhVien,
    });

    const modalAdd = useModalDialogForm({
        fields: fieldsAdd,
        schema,
        title: "Thêm sinh viên",
        onSubmit: async (values: any) => {
            try {
                await postSinhVien(values);
                toast.success('Thêm sinh viên thành công')
                modalAdd.close();
                await refetch();
            } catch (err: any) {
                toast.error(err.message)
            }
        },
    })

    const modalUpdate = useModalDialogForm({
        fields: fieldsUpdate,
        schema,
        title: "Cập nhật sinh viên",
        onSubmit: async (values: any) => {
            try {
                await patchSinhVien(values);
                toast.success('Cập nhật sinh viên thành công')
                modalUpdate.close();
                await refetch();
            } catch (err: any) {
                toast.error(err.message)
            }
        },
    })

    const handleDelete = async (id: string) => {
        try {
            await deleteSinhVien(id);
            toast.success("Xóa thành công");
            await refetch();
        } catch (err: any) {
            toast.error(err.message || "Xóa thất bại");
        }
    };

    return (
        <>
            <DataTable2
                id={'id_sinh_vien'}
                data={data?.payload.data || []}
                columns={columns}
                onCreate={() => modalAdd.open()}
                onDelete={(id) => handleDelete(id)}
                onUpdate={(data) => modalUpdate.open(data)}
            />

            <ModalDialog {...modalAdd}/>
            <ModalDialog {...modalUpdate}/>
        </>
    );
}
