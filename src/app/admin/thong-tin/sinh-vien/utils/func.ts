import http from "@/utils/http";
import {schema} from "@/app/admin/thong-tin/sinh-vien/utils/columns";
import {z} from "zod";

interface SinhVienData {
    status: number
    payload: any
}

export const getSinhVien = async (): Promise<SinhVienData> => {
    return await http.get('/sinh-vien');
};

export const deleteSinhVien = async (id: string): Promise<SinhVienData> => {
    return await http.delete(`/sinh-vien/${id}`, null);
}

export const postSinhVien = async (body: SinhVienData) => {
    return await http.post(`/sinh-vien`, body);
}

export const patchSinhVien = async (body: z.infer<typeof schema>) => {
    const id = body.id_sinh_vien;
    return await http.path(`/sinh-vien/${id}`, body);
}
