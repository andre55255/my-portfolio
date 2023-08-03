import Logo from "../navbar/logo";
import Menu from "../navbar/menu";
import SocialIcons from "../navbar/social-icon";
import { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { FooterContact, FooterContainer, FooterItem, FooterSeparate, FooterSignature } from "./styled";
import { PortfolioDataContext } from "../../providers/portfolio-data-provider";

export default function Footer() {
    const { data } = useContext(PortfolioDataContext);

    return (
        <>
            <FooterContainer>
                <Logo />
                <FooterContact>
                    <FooterItem>{data?.phoneNumber}</FooterItem>
                    <FooterItem>{data?.email}</FooterItem>
                </FooterContact>
                <SocialIcons isThemeIconNotRender={true} />
            </FooterContainer>
            <FooterSeparate />
            <FooterContainer>
                <FooterContact>
                    <Menu />
                </FooterContact>
                <FooterSignature>&copy; Desenvolvido com <FaHeart /> por {data?.firstname} {data?.lastname}</FooterSignature>
            </FooterContainer>
        </>
    );
}
