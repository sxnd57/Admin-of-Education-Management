import http from "@/utils/http";
import {schema} from "@/app/admin/thong-tin/chuc-vu/utils/columns";
import {z} from "zod";
import {PayloadInterface} from "@/utils/payload.interface";

export const getChucVu = async (): Promise<PayloadInterface> => {
    return await http.get('/chuc-vu');
};

export const deleteChucVu = async (id: string): Promise<PayloadInterface> => {
    return await http.delete(`/chuc-vu/${id}`, null);
}

export const postChucVu = async (body: PayloadInterface) => {
    return await http.post(`/chuc-vu`, body);
}

export const patchChucVu = async (body: z.infer<typeof schema>) => {
    const id = body.id_chuc_vu;
    return await http.path(`/chuc-vu/${id}`, body);
}
