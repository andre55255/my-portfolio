import { styled } from "styled-components";
import { StyledComponentProps } from "../../types/styled-component-props";

export const SeparateContactPage = styled.span<StyledComponentProps>`
    margin: 2rem 0;
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => props.theme.textColor};
`;

export const DescriptionContactPage = styled.p<StyledComponentProps>`
    margin-top: 2rem;
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => props.theme.textColor};
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const MailContactPage = styled.span<StyledComponentProps>`
    font-size: 1rem;
    font-weight: bold;
    color: #407EA2;
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;
