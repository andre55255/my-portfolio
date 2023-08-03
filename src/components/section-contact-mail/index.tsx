import { PortfolioDataContext } from "../../providers/portfolio-data-provider";
import { DescriptionContactPage, MailContactPage, SeparateContactPage } from "./styled";
import { useContext } from "react";

export default function SectionContactMail() {
    const { data } = useContext(PortfolioDataContext);

    return (
        <>
            <SeparateContactPage>OU</SeparateContactPage>
            <DescriptionContactPage>
                Para qualquer questão, por favor entre em contato pelo email:{" "}
            </DescriptionContactPage>
            <MailContactPage>{data?.email}</MailContactPage>
        </>
    );
}
