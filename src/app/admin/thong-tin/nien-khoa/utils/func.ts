import http from "@/utils/http";
import {schema} from "@/app/admin/thong-tin/nien-khoa/utils/columns";
import {z} from "zod";
import {PayloadInterface} from "@/utils/payload.interface";


export const getNienKhoa = async (): Promise<PayloadInterface> => {
    return await http.get('/nien-khoa');
};

export const deleteNienKhoa = async (id: string): Promise<PayloadInterface> => {
    return await http.delete(`/nien-khoa/${id}`, null);
}

export const postNienKhoa = async (body: PayloadInterface) => {
    return await http.post(`/nien-khoa`, body);
}

export const patchNienKhoa = async (body: z.infer<typeof schema>) => {
    const id = body.id_nien_khoa;
    return await http.path(`/nien-khoa/${id}`, body);
}
