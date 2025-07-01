import {useEffect, useState} from 'react'
import http from "@/utils/http";
import {toast} from "sonner";

interface SinhVienData {
    status: number
    payload: any
}

export const useSinhVien = () => {
    const [data, setData] = useState<SinhVienData>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await http.get('/sinh-vien')
                setData(res)
            } catch (err: any) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetch()
    }, [])

    return {data, loading, error}
}

export const deleteSinhVien = async (id: string) => {
    try {
        const result = await http.delete(`/sinh-vien/${id}`, null)
        if (result.status) {
            toast.success(`Xóa thành công`)
        }
    } catch (error: any) {
        toast.error(error.message)
    }
}
