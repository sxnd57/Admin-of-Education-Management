import {LoginForm} from "@/components/login-form"
import Image from "next/image";

export default function LoginPage() {
    return (
        <div className="grid bg-[url(/vlute-bg.png)] bg-cover w-full min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex items-center justify-center gap-2 md:justify-start">
                    <a href="#" className="flex items-center gap-2 font-medium">
                       <Image src={"/vlute.png"} alt={'Login logo'} width={32} height={32}/>
                    </a>
                    <span className={'font-semibold'}>VLUTE - Quản lý đào tạo</span>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        <LoginForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}
