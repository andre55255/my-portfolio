import { ContainerAbout, TitleAbout } from "../section-about/styled";
import { ButtonSectionContact, FormSectionContact, InputSectionContact, LabelSectionContact } from "./styled";

export default function SectionFormContact() {
    return (
        <ContainerAbout>
            <TitleAbout>Entre em contato</TitleAbout>
            <FormSectionContact>
                <LabelSectionContact htmlFor="name">Nome</LabelSectionContact>
                <InputSectionContact id="name" name="name" type="text" />
                <LabelSectionContact htmlFor="contact">Contato</LabelSectionContact>
                <InputSectionContact id="contact" name="contact" type="text" />
                <LabelSectionContact htmlFor="file">Anexo (opcional)</LabelSectionContact>
                <InputSectionContact id="file" name="file" type="file" />
                <ButtonSectionContact>Enviar</ButtonSectionContact>
            </FormSectionContact>
        </ContainerAbout>
    );
}
