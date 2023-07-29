import { routesAnchor, routesPages } from "../../../helpers/routes-pages";
import MenuItem from "../menu-item";
import MenuStyled from "./styled";

export default function Menu() {
    return (
        <MenuStyled>
            <MenuItem anchor={routesAnchor.home}>Home</MenuItem>
            <MenuItem route={routesPages.about}>Sobre</MenuItem>
            <MenuItem anchor={routesAnchor.stacks}>Stacks</MenuItem>
            <MenuItem anchor={routesAnchor.projects}>Projetos</MenuItem>
            <MenuItem route={routesPages.contact}>Contato</MenuItem>
        </MenuStyled>
    );
}
