"use client";
import {useQuery} from "@tanstack/react-query";
import {toast} from "sonner";
import {deleteNganh, getNganh, patchNganh, postNganh,} from "@/app/admin/thong-tin/nganh/utils/func";
import DataTable2 from "@/components/data-table2";
import {columns, schema} from "@/app/admin/thong-tin/nganh/utils/columns";
import ModalDialog from "@/components/modal-dialog";
import {useModalDialogForm} from "@/hooks/use-modal-form";
import {fields} from "@/app/admin/thong-tin/nganh/utils/fields";

export default function TableNganh() {
    const {data, refetch} = useQuery({
        queryKey: ["nganh"],
        queryFn: getNganh,
    });

    const modalAdd = useModalDialogForm({
        fields,
        schema,
        title: "Thêm ngành",
        onSubmit: async (values: any) => {
            try {
                await postNganh(values);
                toast.success('Thêm ngành thành công')
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
        title: "Cập nhật ngành",
        onSubmit: async (values: any) => {
            try {
                await patchNganh(values);
                toast.success('Cập nhật ngành thành công')
                modalUpdate.close();
                await refetch();
            } catch (err: any) {
                toast.error(err.message)
            }
        },
    })

    const handleDelete = async (id: string) => {
        try {
            await deleteNganh(id);
            toast.success("Xóa thành công");
            await refetch();
        } catch (err: any) {
            toast.error(err.message || "Xóa thất bại");
        }
    };

    return (
        <>
            <DataTable2
                id={'id_nganh'}
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
