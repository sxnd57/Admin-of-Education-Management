"use client";
import {useQuery} from "@tanstack/react-query";
import {toast} from "sonner";
import {deleteGiangVien, getGiangVien, patchGiangVien, postGiangVien,} from "@/app/admin/thong-tin/giang-vien/utils/func";
import DataTable2 from "@/components/data-table2";
import {columns, schema} from "@/app/admin/thong-tin/giang-vien/utils/columns";
import ModalDialog from "@/components/modal-dialog";
import {useModalDialogForm} from "@/hooks/use-modal-form";
import {fieldsAdd} from "@/app/admin/thong-tin/giang-vien/utils/fieldsAdd";
import {fieldsUpdate} from "@/app/admin/thong-tin/giang-vien/utils/fieldsUpdate";

export default function TableGiangVien() {
    const {data, refetch} = useQuery({
        queryKey: ["giang-vien"],
        queryFn: getGiangVien,
    });

    const modalAdd = useModalDialogForm({
        fields: fieldsAdd,
        schema,
        title: "Thêm giảng viên",
        onSubmit: async (values: any) => {
            try {
                await postGiangVien(values);
                toast.success('Thêm giảng viên thành công')
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
        title: "Cập nhật giảng viên",
        onSubmit: async (values: any) => {
            try {
                await patchGiangVien(values);
                toast.success('Cập nhật giảng viên thành công')
                modalUpdate.close();
                await refetch();
            } catch (err: any) {
                toast.error(err.message)
            }
        },
    })

    const handleDelete = async (id: string) => {
        try {
            await deleteGiangVien(id);
            toast.success("Xóa thành công");
            await refetch();
        } catch (err: any) {
            toast.error(err.message || "Xóa thất bại");
        }
    };

    return (
        <>
            <DataTable2
                id={'id_giang_vien'}
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
