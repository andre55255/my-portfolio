import { FormHelperError, LabelSectionContact } from "../input-text-file/styled";
import { InputMessageSectionContact } from "./styled";

interface InputTextareaProps {
    name: string;
    label: string;
    rows: number;
    maxLength: number;
    isInvalid: boolean;
    errorMessage: string | undefined;
    onChange: React.ChangeEventHandler;
    value: any;
}

export default function InputTextarea({
    name,
    label,
    rows,
    maxLength,
    isInvalid,
    errorMessage,
    onChange,
    value
}: InputTextareaProps) {
    return (
        <>
            <LabelSectionContact htmlFor={name}>{label}</LabelSectionContact>
            <InputMessageSectionContact
                id={name}
                name={name}
                rows={rows}
                maxLength={maxLength}
                onChange={onChange}
                value={value}
            />
            {isInvalid && <FormHelperError>{errorMessage}</FormHelperError>}
        </>
    );
}
