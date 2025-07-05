import http from "@/utils/http";
import {schema} from "@/app/admin/thong-tin/giang-vien/utils/columns";
import {z} from "zod";
import {PayloadInterface} from "@/utils/payload.interface";

export const getGiangVien = async (): Promise<PayloadInterface> => {
    return await http.get('/giang-vien');
};

export const deleteGiangVien = async (id: string): Promise<PayloadInterface> => {
    return await http.delete(`/giang-vien/${id}`, null);
}

export const postGiangVien = async (body: PayloadInterface) => {
    return await http.post(`/giang-vien`, body);
}

export const patchGiangVien = async (body: z.infer<typeof schema>) => {
    const id = body.id_giang_vien;
    return await http.path(`/giang-vien/${id}`, body);
}
