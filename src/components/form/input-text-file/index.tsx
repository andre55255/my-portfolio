import { FormHelperError, InputSectionContact, LabelSectionContact } from "./styled";

interface InputTextProps {
    name: string;
    type: "text" | "email" | "file";
    maxLength?: number;
    label: string;
    isInvalid: boolean;
    errorMessage: string | undefined;
    onChange: React.ChangeEventHandler | any;
    value: any;
}

export default function InputTextFile({
    name,
    type,
    maxLength,
    label,
    isInvalid,
    errorMessage,
    onChange,
    value
}: InputTextProps) {
    return (
        <>
            <LabelSectionContact htmlFor={name}>{label}</LabelSectionContact>
            <InputSectionContact
                id={name}
                name={name}
                type={type}
                maxLength={maxLength}
                onChange={onChange}
                value={value}
            />
            {isInvalid && <FormHelperError>{errorMessage}</FormHelperError>}
        </>
    );
}
