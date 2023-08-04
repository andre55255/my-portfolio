import { ButtonSectionContact } from "./styled";

interface ButtonSubmitProps {
    label: string;
}

export default function ButtonSubmit({ label }: ButtonSubmitProps) {
    return <ButtonSectionContact type="submit">{label}</ButtonSectionContact>;
}
