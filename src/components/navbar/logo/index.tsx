import { LogoStyled } from "./styled";
import logoImgLight from "../../../assets/logo-ad-cutted.png";
import logoImgDark from "../../../assets/logo-ad-dark-cutted.png";
import { useTheme } from "../../../hooks/use-theme";

export default function Logo() {
    const { theme } = useTheme();

    return (
        <LogoStyled>
            {theme === "light" ? (
                <img src={logoImgLight} alt="logo" />
            ) : (
                <img src={logoImgDark} alt="logo" />
            )}
        </LogoStyled>
    );
}
