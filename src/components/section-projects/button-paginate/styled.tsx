import { styled } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component-props";

export const PaginationContainer = styled.div<StyledComponentProps>`
    display: flex!important;
    justify-content: center;
    gap: 1rem;
    margin: 1.5rem 0;
`;

export const PaginationButton = styled.button<StyledComponentProps>`
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.primaryTextColorBtn};
    border: none;
    outline: none;
    border-radius: 5px;
    padding: .5rem 1rem;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${props => props.theme.primaryColorHover};
    }
`;
