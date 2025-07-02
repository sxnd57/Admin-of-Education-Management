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
    const [dialogTitle, setDialogTitle] = useState(title);

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues,
    });

    const openWithData = (data?: Record<string, any>, overrideTitle?: string) => {
        if (data) {
            form.reset(data);
        } else {
            form.reset(defaultValues);
        }

        if (overrideTitle) {
            setDialogTitle(overrideTitle);
        } else {
            setDialogTitle(title);
        }

        setOpenDialog(true);
    };

    return {
        openDialog,
        setOpenDialog,
        form,
        fields,
        title: dialogTitle,
        onSubmit,
        openWithData,
    };
}