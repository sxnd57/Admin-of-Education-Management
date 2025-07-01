'use client'

import {usePathname} from 'next/navigation'
import Link from 'next/link'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import React from 'react'

const formatPageName = (slug: string) => {
    const parts = slug.split('-')
    const name = parts.map(word =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ')

    const dictionary: Record<string, string> = {
        'sinh-vien': 'Sinh viên',
        'thong-tin': 'Thông tin',
        'giang-vien': 'Giảng viên',
        'mon-hoc': 'Môn học',
        'tai-khoan': 'Tài khoản',
        'dang-nhap': 'Đăng nhập',
        'dang-ky': 'Đăng ký',
    }

    return dictionary[slug] || name
}


export default function AppBreadcrumb() {
    const pathname = usePathname()
    const pathnameArr = pathname.split('/').filter((item) => item.trim() !== '')

    console.log(pathnameArr)

    const paths = pathnameArr.map((_, index) =>
        '/' + pathnameArr.slice(0, index + 1).join('/')
    )

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {pathnameArr.map((item, index) => {
                    if(index > 0){
                        const href = paths[index]
                        const isLast = index === pathnameArr.length - 1
                        const label = formatPageName(item)

                        return (
                            <React.Fragment key={index}>
                                <BreadcrumbItem>
                                    {isLast ? (
                                        <BreadcrumbPage>{label}</BreadcrumbPage>
                                    ) : (
                                        <BreadcrumbLink asChild>
                                            <Link href={href}>{label}</Link>
                                        </BreadcrumbLink>
                                    )}
                                </BreadcrumbItem>
                                {!isLast && <BreadcrumbSeparator/>}
                            </React.Fragment>
                        )
                    }
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
