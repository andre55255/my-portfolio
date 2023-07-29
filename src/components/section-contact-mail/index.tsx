import { EMAIL } from "../../helpers/constants";
import { DescriptionContactPage, MailContactPage, SeparateContactPage } from "./styled";

export default function SectionContactMail() {
    return (
        <>
            <SeparateContactPage>OU</SeparateContactPage>
            <DescriptionContactPage>
                Para qualquer questão, por favor entre em contato pelo email:{" "}
            </DescriptionContactPage>
            <MailContactPage>{EMAIL}</MailContactPage>
        </>
    );
}
