import http from "@/utils/http";
import {schema} from "@/app/admin/thong-tin/nganh/utils/columns";
import {z} from "zod";
import {PayloadInterface} from "@/utils/payload.interface";



export const getNganh = async (): Promise<PayloadInterface> => {
    return await http.get('/nganh');
};

export const deleteNganh = async (id: string): Promise<PayloadInterface> => {
    return await http.delete(`/nganh/${id}`, null);
}

export const postNganh = async (body: PayloadInterface) => {
    return await http.post(`/nganh`, body);
}

export const patchNganh = async (body: z.infer<typeof schema>) => {
    const id = body.id_he_dao_tao;
    return await http.path(`/nganh/${id}`, body);
}
