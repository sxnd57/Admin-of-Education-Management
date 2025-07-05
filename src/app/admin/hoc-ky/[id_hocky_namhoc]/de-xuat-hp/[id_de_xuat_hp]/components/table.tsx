"use client";
import {useQuery} from "@tanstack/react-query";
import {toast} from "sonner";
import {
    deleteDeXuatHPNienKhoa,
    getDeXuatHPNienKhoa,
    patchDeXuatHPNienKhoa,
    postDeXuatHPNienKhoa,
} from "@/app/admin/hoc-ky/[id_hocky_namhoc]/de-xuat-hp/[id_de_xuat_hp]/utils/func";
import DataTable2 from "@/components/data-table2";
import {columns, schema} from "@/app/admin/hoc-ky/[id_hocky_namhoc]/de-xuat-hp/[id_de_xuat_hp]/utils/columns";
import ModalDialog from "@/components/modal-dialog";
import {useModalDialogForm} from "@/hooks/use-modal-form";
import {fields} from "@/app/admin/hoc-ky/[id_hocky_namhoc]/de-xuat-hp/[id_de_xuat_hp]/utils/fields";
import React from "react";

export default function TableDeXuatHPNienKhoa({id}: { id: number }) {
    const {data, refetch} = useQuery({
        queryKey: ["de-xuat-hp-nien-khoa", id],
        queryFn: () => getDeXuatHPNienKhoa(id),
        enabled: !!id,
    });

    const modalAdd = useModalDialogForm({
        fields,
        schema,
        title: "Thêm đợt đề xuất niên khóa",
        onSubmit: async (values: any) => {
            try {
                await postDeXuatHPNienKhoa(id, values);
                toast.success('Thêm đợt đề xuất niên khóa thành công')
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
        title: "Cập nhật đề xuất niên khóa",
        onSubmit: async (values: any) => {
            try {
                await patchDeXuatHPNienKhoa(values);
                toast.success('Cập nhật đợt đề xuất niên khóa thành công')
                modalUpdate.close();
                await refetch();
            } catch (err: any) {
                toast.error(err.message)
            }
        },
    })

    const handleDelete = async (id: string) => {
        try {
            await deleteDeXuatHPNienKhoa(id);
            toast.success("Xóa thành công");
            await refetch();
        } catch (err: any) {
            toast.error(err.message || "Xóa thất bại");
        }
    };

    return (
        <>
            <DataTable2
                id={'id_de_xuat_hp_nien_khoa'}
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
