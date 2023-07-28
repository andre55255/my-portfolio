import { styled } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component-props";

const Menu = styled.ul<StyledComponentProps>`
    display: flex;
    list-style: none;

    li {
        margin-right: 1.5rem;

        &:last-child {
            margin-right: 0;
        }

        a {
            color: ${(props) => props.theme.textMenuColor};
            text-decoration: none;
        }
    }
`;

export default Menu;