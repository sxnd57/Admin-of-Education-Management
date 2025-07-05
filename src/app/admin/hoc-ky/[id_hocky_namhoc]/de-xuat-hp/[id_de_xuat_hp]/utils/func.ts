import http from "@/utils/http";
import {schema} from "@/app/admin/hoc-ky/[id_hocky_namhoc]/de-xuat-hp/[id_de_xuat_hp]/utils/columns";
import {z} from "zod";
import {PayloadInterface} from "@/utils/payload.interface";

export const getDeXuatHPNienKhoa = async (id: number): Promise<PayloadInterface> => {
    return await http.get(`/de-xuat-hp-nien-khoa?id_de_xuat_hp=${id}`);
};

export const deleteDeXuatHPNienKhoa = async (id: string): Promise<PayloadInterface> => {
    return await http.delete(`/de-xuat-hp-nien-khoa/${id}`, null);
}

export const postDeXuatHPNienKhoa = async (id: number, body: PayloadInterface) => {
    return await http.post(`/de-xuat-hp-nien-khoa`, {...body, id_de_xuat_hp: id});
}

export const patchDeXuatHPNienKhoa = async (body: z.infer<typeof schema>) => {
    const id = body.id_de_xuat_hp_nien_khoa;
    return await http.path(`/de-xuat-hp-nien-khoa/${id}`, body);
}
