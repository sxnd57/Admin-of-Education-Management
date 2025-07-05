"use client";
import {useQuery} from "@tanstack/react-query";
import {toast} from "sonner";
import DataTable2 from "@/components/data-table2";
import {columns, schema} from "@/app/admin/thong-tin/phong-hoc/utils/columns";
import ModalDialog from "@/components/modal-dialog";
import {useModalDialogForm} from "@/hooks/use-modal-form";
import {fields} from "@/app/admin/thong-tin/phong-hoc/utils/fields";
import {deletePhongHoc, getPhongHoc, patchPhongHoc, postPhongHoc} from "@/app/admin/thong-tin/phong-hoc/utils/func";

export default function TablePhongHoc() {
    const {data, refetch} = useQuery({
        queryKey: ["phong-hoc"],
        queryFn: getPhongHoc,
    });

    const modalAdd = useModalDialogForm({
        fields,
        schema,
        title: "Thêm phòng học",
        onSubmit: async (values: any) => {
            try {
                await postPhongHoc(values);
                toast.success('Thêm phòng học thành công')
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
        title: "Cập nhật phòng học",
        onSubmit: async (values: any) => {
            try {
                await patchPhongHoc(values);
                toast.success('Cập nhật phòng học thành công')
                modalUpdate.close();
                await refetch();
            } catch (err: any) {
                toast.error(err.message)
            }
        },
    })

    const handleDelete = async (id: string) => {
        try {
            await deletePhongHoc(id);
            toast.success("Xóa thành công");
            await refetch();
        } catch (err: any) {
            toast.error(err.message || "Xóa thất bại");
        }
    };

    return (
        <>
            <DataTable2
                id={'id_phong_hoc'}
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
