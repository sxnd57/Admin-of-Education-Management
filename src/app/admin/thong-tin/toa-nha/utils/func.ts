import http from "@/utils/http";
import {schema} from "@/app/admin/thong-tin/toa-nha/utils/columns";
import {z} from "zod";
import {PayloadInterface} from "@/utils/payload.interface";


export const getToaNha = async (): Promise<PayloadInterface> => {
    return await http.get('/toa-nha');
};

export const deleteToaNha = async (id: string): Promise<PayloadInterface> => {
    return await http.delete(`/toa-nha/${id}`, null);
}

export const postToaNha = async (body: PayloadInterface) => {
    return await http.post(`/toa-nha`, body);
}

export const patchToaNha = async (body: z.infer<typeof schema>) => {
    const id = body.id_toa_nha;
    return await http.path(`/toa-nha/${id}`, body);
}
