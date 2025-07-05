import http from "@/utils/http";
import {schema} from "@/app/admin/thong-tin/he-dao-tao/utils/columns";
import {z} from "zod";
import {PayloadInterface} from "@/utils/payload.interface";

export const getHeDaoTao = async (): Promise<PayloadInterface> => {
    return await http.get('/he-dao-tao');
};

export const deleteHeDaoTao = async (id: string): Promise<PayloadInterface> => {
    return await http.delete(`/he-dao-tao/${id}`, null);
}

export const postHeDaoTao = async (body: PayloadInterface) => {
    return await http.post(`/he-dao-tao`, body);
}

export const patchHeDaoTao = async (body: z.infer<typeof schema>) => {
    const id = body.id_he_dao_tao;
    return await http.path(`/he-dao-tao/${id}`, body);
}
