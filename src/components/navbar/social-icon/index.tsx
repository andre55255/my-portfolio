import { GITHUB_LINK, LINKEDIN_LINK } from "../../../helpers/constants";
import { useTheme } from "../../../hooks/use-theme";
import SocialIconItem from "../social-icon-item";
import SocialIconsStyled from "./styled";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";

export default function SocialIcons() {
    const { themeToggler, theme } = useTheme();

    const handleThemeToggle = () => {
        themeToggler();
        window.location.reload();
    };

    return (
        <SocialIconsStyled>
            <SocialIconItem
                link={GITHUB_LINK}
                Icon={<FaGithub className="ico" />}
            />
            <SocialIconItem
                link={LINKEDIN_LINK}
                Icon={<FaLinkedin className="ico" />}
            />
            {theme === "light" ? (
                <SocialIconItem
                    Icon={
                        <FaMoon className="ico" onClick={handleThemeToggle} />
                    }
                />
            ) : (
                <SocialIconItem
                    Icon={<FaSun className="ico" onClick={handleThemeToggle} />}
                />
            )}
        </SocialIconsStyled>
    );
}
