"use client"
import {Award, Book, BookOpen, Briefcase, CalendarRange, GraduationCap, Users} from "lucide-react";
import * as React from "react";
import GridCard from "@/components/grid-card";

export default function Page({ params }: { params: Promise<{ id_hocky_namhoc: string }> }) {
    const { id_hocky_namhoc: id } = React.use(params);
    const subjects = [
        {
            title: "Đề xuất học phần",
            description: "Quản lý và đề xuất các học phần phù hợp cho sinh viên đăng ký",
            icon: BookOpen,
            href: `/admin/hoc-ky/${id}/de-xuat-hp`,
            color: "bg-green-500",
        },
        {
            title: "Đăng ký học phần",
            description: "Thực hiện đăng ký học phần cho sinh viên trong học kỳ",
            icon: GraduationCap,
            href: `/admin/hoc-ky/${id}/dang-ky-hp`,
            color: "bg-blue-600",
        },
        {
            title: "Lớp học phần",
            description: "Quản lý thông tin các lớp học phần và lịch học",
            icon: Users,
            href: `/admin/hoc-ky/${id}/lop-hoc-phan`,
            color: "bg-emerald-500",
        },
        {
            title: "Thời gian tiết học",
            description: "Thiết lập và quản lý thời gian các tiết học trong ngày",
            icon: CalendarRange,
            href: `/admin/hoc-ky/${id}/tiet-hoc`,
            color: "bg-purple-600",
        },
        {
            title: "Lịch thi",
            description: "Quản lý lịch thi và lịch trình kiểm tra cho các học phần",
            icon: Award,
            href: `/admin/hoc-ky/${id}/lich-thi`,
            color: "bg-amber-500",
        }
    ]

    const marks = [
        {
            title: "Template điểm",
            description: "Tạo và quản lý các mẫu template cho việc nhập điểm",
            icon: Book,
            href: `/admin/hoc-ky/${id}/template-diem`,
            color: "bg-rose-500",
        },
        {
            title: "Xếp loại học phần",
            description: "Thiết lập và quản lý hệ thống xếp loại cho các học phần",
            icon: Award,
            href: `/admin/hoc-ky/${id}/xep-loai-hp`,
            color: "bg-sky-500",
        },
        {
            title: "Hạng tốt nghiệp",
            description: "Quản lý tiêu chuẩn và xếp hạng tốt nghiệp cho sinh viên",
            icon: GraduationCap,
            href: `/admin/hoc-ky/${id}/hang-tot-nghiep`,
            color: "bg-teal-500",
        },
    ]

    const tuition = [
        {
            title: "Học phí",
            description: "Quản lý học phí và các khoản thu cho từng học phần",
            icon: Briefcase,
            href: `/admin/hoc-ky/${id}/hoc-phi`,
            color: "bg-violet-500",
        }
    ]
    return (
        <>
            <h5 className={'text-xl font-bold mb-5'}>1. Quản lý học phần</h5>
            <GridCard items={subjects}/>
            <h5 className={'text-xl font-bold my-5'}>2. Quản lý điểm</h5>
            <GridCard items={marks}/>
            <h5 className={'text-xl font-bold my-5'}>3. Quản lý học phí</h5>
            <GridCard items={tuition}/>
        </>
    )
}