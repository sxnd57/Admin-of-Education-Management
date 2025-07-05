"use client";
import {useQuery} from "@tanstack/react-query";
import {toast} from "sonner";
import {deleteChucVu, getChucVu, patchChucVu, postChucVu,} from "@/app/admin/thong-tin/chuc-vu/utils/func";
import DataTable2 from "@/components/data-table2";
import {columns, schema} from "@/app/admin/thong-tin/chuc-vu/utils/columns";
import ModalDialog from "@/components/modal-dialog";
import {useModalDialogForm} from "@/hooks/use-modal-form";
import {fields} from "@/app/admin/thong-tin/chuc-vu/utils/fields";

export default function TableChucVu() {
    const {data, refetch} = useQuery({
        queryKey: ["chuc-vu"],
        queryFn: getChucVu,
    });

    const modalAdd = useModalDialogForm({
        fields,
        schema,
        title: "Thêm chức vụ",
        onSubmit: async (values: any) => {
            try {
                await postChucVu(values);
                toast.success('Thêm chức vụ thành công')
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
        title: "Cập nhật chức vụ",
        onSubmit: async (values: any) => {
            try {
                await patchChucVu(values);
                toast.success('Cập nhật chức vụ thành công')
                modalUpdate.close();
                await refetch();
            } catch (err: any) {
                toast.error(err.message)
            }
        },
    })

    const handleDelete = async (id: string) => {
        try {
            await deleteChucVu(id);
            toast.success("Xóa thành công");
            await refetch();
        } catch (err: any) {
            toast.error(err.message || "Xóa thất bại");
        }
    };

    return (
        <>
            <DataTable2
                id={'id_chuc_vu'}
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
