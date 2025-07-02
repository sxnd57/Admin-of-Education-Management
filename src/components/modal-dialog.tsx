import {Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Form} from "@/components/ui/form";
import {Label} from "@/components/ui/label";
import {FieldError, UseFormReturn} from "react-hook-form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import React from "react";
import {Field} from "@/utils/field.inteface";


interface ModalDialogProps {
    openDialog: boolean;
    setOpenDialog: (open: boolean) => void;
    form: UseFormReturn<any>;
    fields: Field[];
    title: string;
    onSubmit: (values: any) => void;
}

export default function ModalDialog({
                                        openDialog,
                                        setOpenDialog,
                                        form,
                                        fields,
                                        title,
                                        onSubmit
                                    }: ModalDialogProps) {
    const {register, handleSubmit, control, formState: {errors}} = form;
    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent className="overflow-y-auto max-h-screen" aria-describedby={undefined}>
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <DialogHeader>
                            <DialogTitle>{title || 'Modal Dialog'}</DialogTitle>
                        </DialogHeader>

                        <div className="grid gap-4 my-4">
                            {fields.map((field) => (
                                <div key={field.key} className="grid gap-2">
                                    <Label htmlFor={field.key}>{field.label}</Label>

                                    {field.component ? (
                                        field.component({
                                            fieldKey: field.key,
                                            control: control,
                                            error: errors[field.key] as FieldError,
                                        })
                                    ) : (
                                        <>
                                            <Input
                                                id={field.key}
                                                placeholder={field.placeholder || ""}
                                                type={field.type || "text"}
                                                {...register(field.key)}
                                            />
                                            {errors[field.key] && (
                                                <span className="text-sm text-red-500">
                                                      {errors[field.key]?.message?.toString()}
                                                    </span>
                                            )}
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>

                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline">Đóng</Button>
                            </DialogClose>
                            <Button type="submit">Lưu</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}