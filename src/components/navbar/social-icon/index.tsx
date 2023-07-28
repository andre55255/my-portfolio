import { styled } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component-props";

const SocialIcons = styled.div<StyledComponentProps>`
    display: flex;
    margin-right: 4rem;

    a {
        margin-left: 1rem;
    }

    a > .ico {
        color: ${(props) => props.theme.textMenuColor};
        font-size: 1.5rem;
    }
`;

export default SocialIcons;