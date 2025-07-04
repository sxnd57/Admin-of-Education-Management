import {Field} from "@/utils/field.inteface";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {ZodType} from "zod";

interface UseModalDialogFormProps {
    fields: Field[];
    schema: ZodType<any, any>;
    title?: string;
    onSubmit: (values: any) => void;
    defaultValues?: Record<string, any>;
}

export function useModalDialogForm({
                                       fields,
                                       schema,
                                       title = "Modal Dialog",
                                       onSubmit,
                                       defaultValues = {},
                                   }: UseModalDialogFormProps) {
    const [openDialog, setOpenDialog] = useState(false);

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues,
    });

    const open = (data?: Record<string, any>) => {
        form.reset(data || defaultValues);
        setOpenDialog(true);
    };

    const close = () => {
        form.reset(defaultValues);
        setOpenDialog(false);
    };


    return {
        openDialog,
        setOpenDialog,
        form,
        fields,
        title,
        onSubmit,
        open,
        close,
    };
}