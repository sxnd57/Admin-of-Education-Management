"use client";
import {useQuery} from "@tanstack/react-query";
import {toast} from "sonner";
import {deleteChungChi, getChungChi, patchChungChi, postChungChi,} from "@/app/admin/thong-tin/chung-chi/utils/func";
import DataTable2 from "@/components/data-table2";
import {columns, schema} from "@/app/admin/thong-tin/chung-chi/utils/columns";
import ModalDialog from "@/components/modal-dialog";
import {useModalDialogForm} from "@/hooks/use-modal-form";
import {fields} from "@/app/admin/thong-tin/chung-chi/utils/fields";

export default function TableChungChi() {
    const {data, refetch} = useQuery({
        queryKey: ["chung-chi"],
        queryFn: getChungChi,
    });

    const modalAdd = useModalDialogForm({
        fields,
        schema,
        title: "Thêm chứng chỉ",
        onSubmit: async (values: any) => {
            try {
                await postChungChi(values);
                toast.success('Thêm chứng chỉ thành công')
                modalAdd.close();
                await refetch();
            } catch (err: any) {
                toast.error(err.message)
            }
        },
    })

    const modalUpdate = useModalDialogForm({
        fields,
        schema,
        title: "Cập nhật chứng chỉ",
        onSubmit: async (values: any) => {
            try {
                await patchChungChi(values);
                toast.success('Cập nhật chứng chỉ thành công')
                modalUpdate.close();
                await refetch();
            } catch (err: any) {
                toast.error(err.message)
            }
        },
    })

    const handleDelete = async (id: string) => {
        try {
            await deleteChungChi(id);
            toast.success("Xóa thành công");
            await refetch();
        } catch (err: any) {
            toast.error(err.message || "Xóa thất bại");
        }
    };

    return (
        <>
            <DataTable2
                id={'id_chung_chi'}
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
