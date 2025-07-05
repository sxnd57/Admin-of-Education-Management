"use client";
import {useQuery} from "@tanstack/react-query";
import {toast} from "sonner";
import {deleteToaNha, getToaNha, patchToaNha, postToaNha,} from "@/app/admin/thong-tin/toa-nha/utils/func";
import DataTable2 from "@/components/data-table2";
import {columns, schema} from "@/app/admin/thong-tin/toa-nha/utils/columns";
import ModalDialog from "@/components/modal-dialog";
import {useModalDialogForm} from "@/hooks/use-modal-form";
import {fields} from "@/app/admin/thong-tin/toa-nha/utils/fields";

export default function TableToaNha() {
    const {data, refetch} = useQuery({
        queryKey: ["toa-nha"],
        queryFn: getToaNha,
    });

    const modalAdd = useModalDialogForm({
        fields,
        schema,
        title: "Thêm tòa nhà",
        onSubmit: async (values: any) => {
            try {
                await postToaNha(values);
                toast.success('Thêm tòa nhà thành công')
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
        title: "Cập nhật tòa nhà",
        onSubmit: async (values: any) => {
            try {
                await patchToaNha(values);
                toast.success('Cập nhật tòa nhà thành công')
                modalUpdate.close();
                await refetch();
            } catch (err: any) {
                toast.error(err.message)
            }
        },
    })

    const handleDelete = async (id: string) => {
        try {
            await deleteToaNha(id);
            toast.success("Xóa thành công");
            await refetch();
        } catch (err: any) {
            toast.error(err.message || "Xóa thất bại");
        }
    };

    return (
        <>
            <DataTable2
                id={'id_toa_nha'}
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
