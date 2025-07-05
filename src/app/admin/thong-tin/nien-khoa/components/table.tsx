"use client";
import {useQuery} from "@tanstack/react-query";
import {toast} from "sonner";
import DataTable2 from "@/components/data-table2";
import {columns, schema} from "@/app/admin/thong-tin/nien-khoa/utils/columns";
import ModalDialog from "@/components/modal-dialog";
import {useModalDialogForm} from "@/hooks/use-modal-form";
import {fields} from "@/app/admin/thong-tin/nien-khoa/utils/fields";
import {deleteNienKhoa, getNienKhoa, patchNienKhoa, postNienKhoa} from "@/app/admin/thong-tin/nien-khoa/utils/func";

export default function TableNienKhoa() {
    const {data, refetch} = useQuery({
        queryKey: ["nien-khoa"],
        queryFn: getNienKhoa,
    });

    const modalAdd = useModalDialogForm({
        fields,
        schema,
        title: "Thêm niên khóa",
        onSubmit: async (values: any) => {
            try {
                await postNienKhoa(values);
                toast.success('Thêm niên khóa thành công')
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
        title: "Cập nhật niên khóa",
        onSubmit: async (values: any) => {
            try {
                await patchNienKhoa(values);
                toast.success('Cập nhật niên khóa thành công')
                modalUpdate.close();
                await refetch();
            } catch (err: any) {
                toast.error(err.message)
            }
        },
    })

    const handleDelete = async (id: string) => {
        try {
            await deleteNienKhoa(id);
            toast.success("Xóa thành công");
            await refetch();
        } catch (err: any) {
            toast.error(err.message || "Xóa thất bại");
        }
    };

    return (
        <>
            <DataTable2
                id={'id_nien_khoa'}
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
