import http from "@/utils/http";
import {schema} from "@/app/admin/thong-tin/hoc-vi/utils/columns";
import {z} from "zod";
import {PayloadInterface} from "@/utils/payload.interface";


export const getHocVi = async (): Promise<PayloadInterface> => {
    return await http.get('/hoc-vi');
};

export const deleteHocVi = async (id: string): Promise<PayloadInterface> => {
    return await http.delete(`/hoc-vi/${id}`, null);
}

export const postHocVi = async (body: PayloadInterface) => {
    return await http.post(`/hoc-vi`, body);
}

export const patchHocVi = async (body: z.infer<typeof schema>) => {
    const id = body.id_hoc_vi;
    return await http.path(`/hoc-vi/${id}`, body);
}
