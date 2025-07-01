"use client"

import {
    Award,
    Book,
    BookOpen,
    Briefcase,
    Building,
    Building2,
    CalendarRange,
    FileCheck,
    GraduationCap,
    Users,
    UsersRound
} from "lucide-react";
import {usePathname} from "next/navigation";
import GridCard from "@/components/grid-card";

export default function PageThongTin() {
    const pathName = usePathname()
    const dashboardItems = [
        {
            title: "Sinh viên",
            description: "Quản lý thông tin cá nhân, học tập và quá trình đào tạo của sinh viên",
            icon: Users,
            href: `${pathName}/sinh-vien`,
            color: "bg-indigo-500",
        },
        {
            title: "Hệ đào tạo",
            description: "Quản lý các hệ đào tạo như chính quy, liên thông, vừa làm vừa học",
            icon: GraduationCap,
            href: `${pathName}/he-dao-tao`,
            color: "bg-blue-600",
        },
        {
            title: "Niên khóa",
            description: "Quản lý thông tin các khóa tuyển sinh và niên khóa đào tạo",
            icon: CalendarRange,
            href: `${pathName}/nien-khoa`,
            color: "bg-emerald-500",
        },
        {
            title: "Học vị",
            description: "Quản lý các bậc đào tạo: cử nhân, kỹ sư, thạc sĩ, tiến sĩ",
            icon: Award,
            href: `${pathName}/hoc-vi`,
            color: "bg-purple-600",
        },
        {
            title: "Phòng học",
            description: "Quản lý thông tin phòng học, phòng thí nghiệm và cơ sở vật chất",
            icon: Building2,
            href: `${pathName}/phong-hoc`,
            color: "bg-amber-500",
        },
        {
            title: "Tòa nhà",
            description: "Quản lý thông tin các tòa nhà, khu vực và cơ sở trong khuôn viên trường",
            icon: Building,
            href: `${pathName}/toa-nha`,
            color: "bg-rose-500",
        },
        {
            title: "Đơn vị",
            description: "Quản lý thông tin các khoa, phòng ban và đơn vị trực thuộc trường",
            icon: Briefcase,
            href: `${pathName}/don-vi`,
            color: "bg-sky-500",
        },
        {
            title: "Ngành",
            description: "Quản lý thông tin các ngành đào tạo và chuyên ngành của trường",
            icon: BookOpen,
            href: `${pathName}/nganh`,
            color: "bg-teal-500",
        },
        {
            title: "Học phần",
            description: "Quản lý chương trình đào tạo, môn học và tín chỉ",
            icon: Book,
            href: `${pathName}/hoc-phan`,
            color: "bg-violet-500",
        },
        {
            title: "Chức vụ",
            description: "Quản lý các chức danh, vị trí công tác trong trường",
            icon: Award,
            href: `${pathName}/chuc-vu`,
            color: "bg-orange-500",
        },
        {
            title: "Giảng viên",
            description: "Quản lý thông tin giảng viên, cán bộ và nhân viên nhà trường",
            icon: UsersRound,
            href: `${pathName}/giang-vien`,
            color: "bg-blue-500",
        },
        {
            title: "Chứng chỉ",
            description: "Quản lý các loại chứng chỉ, chứng nhận và bằng cấp bổ sung",
            icon: FileCheck,
            href: `${pathName}/chung-chi`,
            color: "bg-pink-500",
        }
    ]
    return (
        <>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Quản lý thông tin</h1>
                <p className="text-gray-600">Xin chào Admin! Đây là trang quản lý các thông tin đào tạo </p>
            </div>
            <GridCard items={dashboardItems}/>
        </>
    )
}