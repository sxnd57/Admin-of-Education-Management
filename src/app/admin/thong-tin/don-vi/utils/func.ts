import http from "@/utils/http";
import {schema} from "@/app/admin/thong-tin/don-vi/utils/columns";
import {z} from "zod";
import {PayloadInterface} from "@/utils/payload.interface";


export const getHocVi = async (): Promise<PayloadInterface> => {
    return await http.get('/don-vi');
};

export const deleteHocVi = async (id: string): Promise<PayloadInterface> => {
    return await http.delete(`/don-vi/${id}`, null);
}

export const postHocVi = async (body: PayloadInterface) => {
    return await http.post(`/don-vi`, body);
}

export const patchHocVi = async (body: z.infer<typeof schema>) => {
    const id = body.id_don_vi;
    return await http.path(`/don-vi/${id}`, body);
}
