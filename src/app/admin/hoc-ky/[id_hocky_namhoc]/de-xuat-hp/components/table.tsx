"use client";
import {useQuery} from "@tanstack/react-query";
import {toast} from "sonner";
import {
    deleteDeXuatHP,
    getDeXuatHP,
    patchDeXuatHP,
    postDeXuatHP,
} from "@/app/admin/hoc-ky/[id_hocky_namhoc]/de-xuat-hp/utils/func";
import DataTable2 from "@/components/data-table2";
import {columns, schema} from "@/app/admin/hoc-ky/[id_hocky_namhoc]/de-xuat-hp/utils/columns";
import ModalDialog from "@/components/modal-dialog";
import {useModalDialogForm} from "@/hooks/use-modal-form";
import {fields} from "@/app/admin/hoc-ky/[id_hocky_namhoc]/de-xuat-hp/utils/fields";

export default function TableDeXuatHP() {
    const {data, refetch} = useQuery({
        queryKey: ["de-xuat-hp"],
        queryFn: getDeXuatHP,
    });

    const modalAdd = useModalDialogForm({
        fields,
        schema,
        title: "Thêm đợt đề xuất",
        onSubmit: async (values: any) => {
            try {
                await postDeXuatHP(values);
                toast.success('Thêm đợt đề xuất thành công')
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
        title: "Cập nhật đề xuất",
        onSubmit: async (values: any) => {
            try {
                await patchDeXuatHP(values);
                toast.success('Cập nhật đợt đề xuất thành công')
                modalUpdate.close();
                await refetch();
            } catch (err: any) {
                toast.error(err.message)
            }
        },
    })

    const handleDelete = async (id: string) => {
        try {
            await deleteDeXuatHP(id);
            toast.success("Xóa thành công");
            await refetch();
        } catch (err: any) {
            toast.error(err.message || "Xóa thất bại");
        }
    };

    return (
        <>
            <DataTable2
                id={'id_de_xuat_hp'}
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
