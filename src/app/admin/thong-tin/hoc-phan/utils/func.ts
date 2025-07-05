import http from "@/utils/http";
import {schema} from "@/app/admin/thong-tin/hoc-phan/utils/columns";
import {z} from "zod";
import {PayloadInterface} from "@/utils/payload.interface";

export const getHocPhan = async (): Promise<PayloadInterface> => {
    return await http.get('/hoc-phan');
};

export const deleteHocPhan = async (id: string): Promise<PayloadInterface> => {
    return await http.delete(`/hoc-phan/${id}`, null);
}

export const postHocPhan = async (body: PayloadInterface) => {
    return await http.post(`/hoc-phan`, body);
}

export const patchHocPhan = async (body: z.infer<typeof schema>) => {
    const id = body.id_hoc_phan;
    return await http.path(`/hoc-phan/${id}`, body);
}
