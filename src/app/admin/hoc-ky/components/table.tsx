"use client";
import {useQuery} from "@tanstack/react-query";
import {toast} from "sonner";
import {deleteHocKy, getHocKy, patchHocKy, postHocKy,} from "@/app/admin/hoc-ky/utils/func";
import DataTable2 from "@/components/data-table2";
import {columns, schema} from "@/app/admin/hoc-ky/utils/columns";
import ModalDialog from "@/components/modal-dialog";
import {useModalDialogForm} from "@/hooks/use-modal-form";
import {fields} from "@/app/admin/hoc-ky/utils/fields";

export default function TableHocKy() {
    const {data, refetch} = useQuery({
        queryKey: ["hoc-ky"],
        queryFn: getHocKy,
    });

    const modalAdd = useModalDialogForm({
        fields,
        schema,
        title: "Thêm học kỳ",
        onSubmit: async (values: any) => {
            try {
                await postHocKy(values);
                toast.success('Thêm học kỳ thành công')
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
        title: "Cập nhật học kỳ",
        onSubmit: async (values: any) => {
            try {
                await patchHocKy(values);
                toast.success('Cập nhật học kỳ thành công')
                modalUpdate.close();
                await refetch();
            } catch (err: any) {
                toast.error(err.message)
            }
        },
    })

    const handleDelete = async (id: string) => {
        try {
            await deleteHocKy(id);
            toast.success("Xóa thành công");
            await refetch();
        } catch (err: any) {
            toast.error(err.message || "Xóa thất bại");
        }
    };

    return (
        <>
            <DataTable2
                id={'id_hocky_namhoc'}
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
