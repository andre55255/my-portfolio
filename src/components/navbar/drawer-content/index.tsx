import { FaRegWindowClose } from "react-icons/fa";
import SocialIcons from "../social-icon";
import Logo from "../logo";
import MenuItem from "../menu-item";
import { routesAnchor, routesPages } from "../../../helpers/routes-pages";
import { HeaderMenuDrawer, MenuContainer, SocialIconsContainer } from "./styled";

interface AuxPropsDrawerContent {
    toggleDrawer: React.MouseEventHandler<SVGElement>;
}

export default function DrawerContent({ toggleDrawer }: AuxPropsDrawerContent) {
    return (
        <MenuContainer>
            <HeaderMenuDrawer>
                <Logo />
                <FaRegWindowClose onClick={toggleDrawer} />
            </HeaderMenuDrawer>
            <MenuItem anchor={routesAnchor.home}>Home</MenuItem>
            <MenuItem route={routesPages.about}>Sobre</MenuItem>
            <MenuItem anchor={routesAnchor.stacks}>Stacks</MenuItem>
            <MenuItem anchor={routesAnchor.projects}>Projetos</MenuItem>
            <MenuItem route={routesPages.contact}>Contato</MenuItem>
            <SocialIconsContainer>
                <SocialIcons />
            </SocialIconsContainer>
        </MenuContainer>
    );
}
