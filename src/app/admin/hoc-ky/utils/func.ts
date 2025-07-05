import http from "@/utils/http";
import {schema} from "@/app/admin/hoc-ky/utils/columns";
import {z} from "zod";
import {PayloadInterface} from "@/utils/payload.interface";

export const getHocKy = async (): Promise<PayloadInterface> => {
    return await http.get('/hoc-ky');
};

export const deleteHocKy = async (id: string): Promise<PayloadInterface> => {
    return await http.delete(`/hoc-ky/${id}`, null);
}

export const postHocKy = async (body: PayloadInterface) => {
    return await http.post(`/hoc-ky`, body);
}

export const patchHocKy = async (body: z.infer<typeof schema>) => {
    const id = body.id_hocky_namhoc;
    return await http.path(`/hoc-ky/${id}`, body);
}
