import {Control, FieldError, FieldValues} from "react-hook-form";
import React from "react";

export interface Field {
    key: string;
    label: string;
    placeholder?: string;
    type?: string;
    component?: (params: {
        fieldKey: string;
        control: Control<FieldValues, any, FieldValues>;
        error?: FieldError
    }) => React.ReactNode;
}