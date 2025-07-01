import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email("Email không đúng định dạng"),
    password: z.string().min(6, "Mật khẩu ít nhất có 6 kí tự").max(100),
}).strict()

export type LoginSchemaType = z.TypeOf<typeof LoginSchema>
export const LoginRes = z.object({
    data: z.object({
        user: z.object({
            id: z.number(),
            email: z.string().email(),
            ho_ten: z.string(),
        }),
        access_token: z.string(),
        refresh_token: z.string(),
    })
})
export type LoginResType = z.TypeOf<typeof LoginRes>
