import { styled } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component-props";

export const ButtonSectionContact = styled.button<StyledComponentProps>`
    margin-top: 2rem;
    margin-right: 4rem;
    padding: 0.8rem 0.5rem;
    cursor: pointer;
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.primaryTextColorBtn};
    border: none;
    outline: none;
    border-radius: 3px;
    font-size: 1rem;

    &:hover {
        background-color: ${(props) => props.theme.primaryColorHover};
    }
`;
