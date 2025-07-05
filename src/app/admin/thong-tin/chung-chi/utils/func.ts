import http from "@/utils/http";
import {schema} from "@/app/admin/thong-tin/chung-chi/utils/columns";
import {z} from "zod";
import {PayloadInterface} from "@/utils/payload.interface";

export const getChungChi = async (): Promise<PayloadInterface> => {
    return await http.get('/chung-chi');
};

export const deleteChungChi = async (id: string): Promise<PayloadInterface> => {
    return await http.delete(`/chung-chi/${id}`, null);
}

export const postChungChi = async (body: PayloadInterface) => {
    return await http.post(`/chung-chi`, body);
}

export const patchChungChi = async (body: z.infer<typeof schema>) => {
    const id = body.id_chung_chi;
    return await http.path(`/chung-chi/${id}`, body);
}
