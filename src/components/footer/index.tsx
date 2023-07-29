import Logo from "../navbar/logo";
import Menu from "../navbar/menu";
import SocialIcons from "../navbar/social-icon";
import { FaHeart } from "react-icons/fa";
import { FooterContact, FooterContainer, FooterItem, FooterSeparate, FooterSignature } from "./styled";
import { EMAIL, PHONE_NUMBER } from "../../helpers/constants";

export default function Footer() {
    return (
        <>
            <FooterContainer>
                <Logo />
                <FooterContact>
                    <FooterItem>{PHONE_NUMBER}</FooterItem>
                    <FooterItem>{EMAIL}</FooterItem>
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
