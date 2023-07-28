import { styled } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component-props";

const MenuItemListStyled = styled.li<StyledComponentProps>`
    &:hover {
        text-decoration: underline;
    }
`;

export default MenuItemListStyled;