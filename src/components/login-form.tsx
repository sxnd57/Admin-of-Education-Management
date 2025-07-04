"use client"
import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import React from "react";
import {useForm} from "react-hook-form";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter} from "next/navigation";
import apiAuthRequest from "@/app/apiRequest/auth";
import {toast} from "sonner";
import {LoginSchema} from "@/app/schemaValidation/auth.schema";
import {clientAccessToken} from "@/utils";

export function LoginForm({className, ...props}: React.ComponentProps<"form">) {
    const [errors, setErrors] = React.useState('')
    const route = useRouter()
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const onsubmit = async (value: z.infer<typeof LoginSchema>) => {
        try {
            const loginRes = await apiAuthRequest.login(value)
            const accessToken = loginRes.payload.data.access_token
            await apiAuthRequest.authLogin({accessToken: accessToken})
            clientAccessToken.value = accessToken
            toast.success('Đăng nhập thành công');
            route.push('/admin');
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setErrors('Tài khoản mật khẩu không chính xác');
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onsubmit)} className={cn("flex flex-col gap-6", className)} {...props}>
                <div className="flex flex-col items-center gap-2 text-center">
                    <h1 className="text-2xl font-bold">Đăng nhập</h1>
                </div>
                <div className="grid gap-6">
                    <div className="grid gap-3">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input className={'bg-white'} placeholder="mssv@st.vlute.edu.vn" {...field} required/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input className={'bg-white'} type={"password"} placeholder="******" {...field} required/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        {errors && <span className={'text-red-500 text-sm'}>{errors}</span>}
                    </div>
                    <Button type="submit" className="w-full">Login</Button>
                    <Button variant="outline" className="w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"/>
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"/>
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                fill="#FBBC05"/>
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"/>
                            <path d="M1 1h22v22H1z" fill="none"/>
                        </svg>
                        Login with Google
                    </Button>
                </div>
                <div className="text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <a href="#!" className="underline underline-offset-4">
                        Sign up
                    </a>
                </div>
            </form>
        </Form>
    )
}
