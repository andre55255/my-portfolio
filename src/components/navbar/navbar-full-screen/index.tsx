import Logo from "../logo/index";
import Menu from "../menu";
import MenuItem from "../menu-item";
import NavbarWrapper from "../navbar-wrapper";
import SocialIcons from "../social-icon";

import { routesAnchor, routesPages } from "../../../helpers/routes-pages";

export default function NavbarFullScreen() {
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
            <SocialIcons />
        </NavbarWrapper>
    );
}
