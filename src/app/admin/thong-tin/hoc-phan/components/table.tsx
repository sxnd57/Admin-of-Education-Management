"use client";
import {useQuery} from "@tanstack/react-query";
import {toast} from "sonner";
import {deleteHocPhan, getHocPhan, patchHocPhan, postHocPhan,} from "@/app/admin/thong-tin/hoc-phan/utils/func";
import DataTable2 from "@/components/data-table2";
import {columns, schema} from "@/app/admin/thong-tin/hoc-phan/utils/columns";
import ModalDialog from "@/components/modal-dialog";
import {useModalDialogForm} from "@/hooks/use-modal-form";
import {fields} from "@/app/admin/thong-tin/hoc-phan/utils/fields";

export default function TableHocPhan() {
    const {data, refetch} = useQuery({
        queryKey: ["hoc-phan"],
        queryFn: getHocPhan,
    });

    const modalAdd = useModalDialogForm({
        fields,
        schema,
        title: "Thêm học phần",
        onSubmit: async (values: any) => {
            try {
                await postHocPhan(values);
                toast.success('Thêm học phần thành công')
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
        title: "Cập nhật học phần",
        onSubmit: async (values: any) => {
            try {
                await patchHocPhan(values);
                toast.success('Cập nhật học phần thành công')
                modalUpdate.close();
                await refetch();
            } catch (err: any) {
                toast.error(err.message)
            }
        },
    })

    const handleDelete = async (id: string) => {
        try {
            await deleteHocPhan(id);
            toast.success("Xóa thành công");
            await refetch();
        } catch (err: any) {
            toast.error(err.message || "Xóa thất bại");
        }
    };

    return (
        <>
            <DataTable2
                id={'id_hoc_phan'}
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
