import {DonViSelectect, HeDaoTaoSelect} from "@/app/selector/selectors";

export const fields = [
    {key: "ma_nganh", label: "Mã ngành", placeholder: "VD: 7480201"},
    {key: "ten_nganh", label: "Tên ngành", placeholder: "VD: Công nghệ thông tin"},
    {
        key: "id_don_vi",
        label: "Đơn vị",
        component: DonViSelectect
    },
    {
        key: "id_he_dao_tao",
        label: "Hệ đào tạo",
        component: HeDaoTaoSelect
    }
]