import { routesAnchor, routesPages } from "../../../helpers/routes-pages";
import MenuItem from "../menu-item";
import MenuStyled from "./styled";

export default function Menu() {
    return (
        <MenuStyled>
            <MenuItem anchor={`${routesAnchor.home.url}#${routesAnchor.home.id}`}>Home</MenuItem>
            <MenuItem anchor={`${routesAnchor.stacks.url}#${routesAnchor.stacks.id}`}>Stacks</MenuItem>
            <MenuItem anchor={`${routesAnchor.projects.url}#${routesAnchor.projects.id}`}>Projetos</MenuItem>
            <MenuItem route={routesPages.about}>Sobre</MenuItem>
            <MenuItem route={routesPages.contact}>Contato</MenuItem>
        </MenuStyled>
    );
}
