"use client"
import {Field} from "@/utils/field.inteface";
import {HeDaoTaoSelect} from "@/app/selector/selectors";

export const fields: Field[] = [
    {key: "ma_nien_khoa", label: "Mã niên khóa", placeholder: "VD: K46"},
    {key: "ten_nien_khoa", label: "Tên niên khóa", placeholder: "VD: Khóa 46"},
    {
        key: "id_he_dao_tao",
        label: "Hệ đào tạo",
        component: HeDaoTaoSelect
    }
]