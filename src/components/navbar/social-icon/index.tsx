import { useTheme } from "../../../hooks/use-theme";
import SocialIconItem from "../social-icon-item";
import SocialIconsStyled from "./styled";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { useContext } from "react";
import { PortfolioDataContext } from "../../../providers/portfolio-data-provider";

interface SocialIconsProps {
    isThemeIconNotRender?: boolean;
}

export default function SocialIcons({
    isThemeIconNotRender,
}: SocialIconsProps) {
    const { themeToggler, theme } = useTheme();
    const { data } = useContext(PortfolioDataContext);

    const handleThemeToggle = () => {
        themeToggler();
        window.location.reload();
    };

    return (
        <SocialIconsStyled>
            <SocialIconItem
                link={data?.githubLink}
                Icon={<FaGithub className="ico" />}
            />
            <SocialIconItem
                link={data?.linkedinLink}
                Icon={<FaLinkedin className="ico" />}
            />
            {!isThemeIconNotRender && theme === "light" ? (
                <SocialIconItem
                    Icon={
                        <FaMoon className="ico" onClick={handleThemeToggle} />
                    }
                />
            ) : !isThemeIconNotRender && theme === "dark" ? (
                <SocialIconItem
                    Icon={<FaSun className="ico" onClick={handleThemeToggle} />}
                />
            ) : <></>}
        </SocialIconsStyled>
    );
}
