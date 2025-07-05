import http from "@/utils/http";
import {schema} from "@/app/admin/hoc-ky/[id_hocky_namhoc]/de-xuat-hp/utils/columns";
import {z} from "zod";
import {PayloadInterface} from "@/utils/payload.interface";

export const getDeXuatHP = async (): Promise<PayloadInterface> => {
    return await http.get('/de-xuat-hp');
};

export const deleteDeXuatHP = async (id: string): Promise<PayloadInterface> => {
    return await http.delete(`/de-xuat-hp/${id}`, null);
}

export const postDeXuatHP = async (body: PayloadInterface) => {
    return await http.post(`/de-xuat-hp`, body);
}

export const patchDeXuatHP = async (body: z.infer<typeof schema>) => {
    const id = body.id_de_xuat_hp;
    return await http.path(`/de-xuat-hp/${id}`, body);
}
