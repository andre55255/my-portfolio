import Logo from "../logo/index";
import Menu from "../menu";
import MenuItem from "../menu-item";
import NavbarWrapper from "../navbar-wrapper";
import SocialIcons from "../social-icon";

import { routesAnchor, routesPages } from "../../../helpers/routes-pages";
import { FaGithub, FaLinkedin, FaMoon } from "react-icons/fa";
import SocialIconItem from "../social-icon-item";
import { GITHUB_LINK, LINKEDIN_LINK } from "../../../helpers/constants";
import { useTheme } from "../../../hooks/use-theme";

export default function NavbarFullScreen() {
    const { themeToggler } = useTheme();

    return (
        <NavbarWrapper>
            <Logo />
            <Menu>
                <MenuItem anchor={routesAnchor.home}>Home</MenuItem>
                <MenuItem route={routesPages.about}>Sobre</MenuItem>
                <MenuItem anchor={routesAnchor.stacks}>Stacks</MenuItem>
                <MenuItem anchor={routesAnchor.projects}>Projetos</MenuItem>
                <MenuItem route={routesPages.contact}>Contato</MenuItem>
            </Menu>
            <SocialIcons>
                <SocialIconItem link={GITHUB_LINK} Icon={<FaGithub className="ico" />} />
                <SocialIconItem link={LINKEDIN_LINK} Icon={<FaLinkedin className="ico" />} />
                <SocialIconItem Icon={<FaMoon className="ico" onClick={themeToggler} />} />
            </SocialIcons>
        </NavbarWrapper>
    );
}
