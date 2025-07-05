import http from "@/utils/http";
import {schema} from "@/app/admin/thong-tin/phong-hoc/utils/columns";
import {z} from "zod";
import {PayloadInterface} from "@/utils/payload.interface";


export const getPhongHoc = async (): Promise<PayloadInterface> => {
    return await http.get('/phong-hoc');
};

export const deletePhongHoc = async (id: string): Promise<PayloadInterface> => {
    return await http.delete(`/phong-hoc/${id}`, null);
}

export const postPhongHoc = async (body: PayloadInterface) => {
    return await http.post(`/phong-hoc`, body);
}

export const patchPhongHoc = async (body: z.infer<typeof schema>) => {
    const id = body.id_phong_hoc;
    return await http.path(`/phong-hoc/${id}`, body);
}
