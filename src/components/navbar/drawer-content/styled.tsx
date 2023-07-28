import { styled } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component-props";

export const MenuContainer = styled.div<StyledComponentProps>`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    > li {
        list-style: none;
        padding: 1rem 0;

        > a {
            color: ${props => props.theme.textMenuColor};
        }
    }
`;

export const HeaderMenuDrawer = styled.div<StyledComponentProps>`
    display: flex;
    align-items: center;
    margin: 2rem 0;

    > svg {
        margin-left: 0.5rem;
        color: ${props => props.theme.textMenuColor};
        font-size: 1.5rem;
    }
`;

export const SocialIconsContainer = styled.div<StyledComponentProps>`
    margin-top: 2rem;
    margin-left: 3.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
`;