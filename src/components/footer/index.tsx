import Logo from "../navbar/logo";
import Menu from "../navbar/menu";
import SocialIcons from "../navbar/social-icon";
import { FaHeart } from "react-icons/fa";
import { FooterContact, FooterContainer, FooterItem, FooterSeparate, FooterSignature } from "./styled";

export default function Footer() {
    const phoneNumber = "+5531995600166";
    const email = "andre_luiz.b5@outlook.com";

    return (
        <>
            <FooterContainer>
                <Logo />
                <FooterContact>
                    <FooterItem>{phoneNumber}</FooterItem>
                    <FooterItem>{email}</FooterItem>
                </FooterContact>
                <SocialIcons isThemeIconNotRender={true} />
            </FooterContainer>
            <FooterSeparate />
            <FooterContainer>
                <FooterContact>
                    <Menu />
                </FooterContact>
                <FooterSignature>&copy; Desenvolvido com <FaHeart /> por André Luiz Barros</FooterSignature>
            </FooterContainer>
        </>
    );
}
