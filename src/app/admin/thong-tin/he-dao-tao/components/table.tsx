"use client";
import {useQuery} from "@tanstack/react-query";
import {toast} from "sonner";
import {deleteHeDaoTao, getHeDaoTao, patchHeDaoTao, postHeDaoTao,} from "@/app/admin/thong-tin/he-dao-tao/utils/func";
import DataTable2 from "@/components/data-table2";
import {columns, schema} from "@/app/admin/thong-tin/he-dao-tao/utils/columns";
import ModalDialog from "@/components/modal-dialog";
import {useModalDialogForm} from "@/hooks/use-modal-form";
import {fields} from "@/app/admin/thong-tin/he-dao-tao/utils/fields";

export default function TableHeDaoTao() {
    const {data, refetch} = useQuery({
        queryKey: ["he-dao-tao"],
        queryFn: getHeDaoTao,
    });

    const modalAdd = useModalDialogForm({
        fields,
        schema,
        title: "Thêm hệ đào tạo",
        onSubmit: async (values: any) => {
            try {
                await postHeDaoTao(values);
                toast.success('Thêm hệ đào tạo thành công')
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
        title: "Cập nhật hệ đào tạo",
        onSubmit: async (values: any) => {
            try {
                await patchHeDaoTao(values);
                toast.success('Cập nhật hệ đào tạo thành công')
                modalUpdate.close();
                await refetch();
            } catch (err: any) {
                toast.error(err.message)
            }
        },
    })

    const handleDelete = async (id: string) => {
        try {
            await deleteHeDaoTao(id);
            toast.success("Xóa thành công");
            await refetch();
        } catch (err: any) {
            toast.error(err.message || "Xóa thất bại");
        }
    };

    return (
        <>
            <DataTable2
                id={'id_he_dao_tao'}
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
