import http from "@/utils/http";

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
