"use client";
import {useQuery} from "@tanstack/react-query";
import {toast} from "sonner";
import DataTable2 from "@/components/data-table2";
import {columns, schema} from "@/app/admin/thong-tin/don-vi/utils/columns";
import ModalDialog from "@/components/modal-dialog";
import {useModalDialogForm} from "@/hooks/use-modal-form";
import {fields} from "@/app/admin/thong-tin/don-vi/utils/fields";
import {deleteHocVi, getHocVi, patchHocVi, postHocVi} from "@/app/admin/thong-tin/don-vi/utils/func";

export default function TableHocVi() {
    const {data, refetch} = useQuery({
        queryKey: ["don-vi"],
        queryFn: getHocVi,
    });

    const modalAdd = useModalDialogForm({
        fields,
        schema,
        title: "Thêm đơn vị",
        onSubmit: async (values: any) => {
            try {
                await postHocVi(values);
                toast.success('Thêm đơn vị thành công')
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
        title: "Cập nhật đơn vị",
        onSubmit: async (values: any) => {
            try {
                await patchHocVi(values);
                toast.success('Cập nhật đơn vị thành công')
                modalUpdate.close();
                await refetch();
            } catch (err: any) {
                toast.error(err.message)
            }
        },
    })

    const handleDelete = async (id: string) => {
        try {
            await deleteHocVi(id);
            toast.success("Xóa thành công");
            await refetch();
        } catch (err: any) {
            toast.error(err.message || "Xóa thất bại");
        }
    };

    return (
        <>
            <DataTable2
                id={'id_don_vi'}
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
