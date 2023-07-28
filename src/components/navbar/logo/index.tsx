import { LogoStyled } from "./styled";
import logoImg from "../../../assets/logo-ad-cutted.png";

export default function Logo() {
    return (
        <LogoStyled>
            <img src={logoImg} alt="logo" />
        </LogoStyled>
    );
}