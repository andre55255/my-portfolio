import { GITHUB_LINK, LINKEDIN_LINK } from "../../../helpers/constants";
import { useTheme } from "../../../hooks/use-theme";
import SocialIconItem from "../social-icon-item";
import SocialIconsStyled from "./styled";
import { FaGithub, FaLinkedin, FaMoon } from "react-icons/fa";

export default function SocialIcons() {
    const { themeToggler } = useTheme();
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
            <SocialIconItem
                Icon={<FaMoon className="ico" onClick={themeToggler} />}
            />
        </SocialIconsStyled>
    );
}
