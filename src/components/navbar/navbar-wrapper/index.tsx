import { styled } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component-props";

const NavbarWrapper = styled.nav<StyledComponentProps>`
    color: ${(props) => props.theme.textMenuColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
`;

export default NavbarWrapper;