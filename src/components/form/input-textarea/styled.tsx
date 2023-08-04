import { styled } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component-props";

export const InputMessageSectionContact = styled.textarea<StyledComponentProps>`
    padding: 0.5rem 0.5rem;
    margin-right: 4rem;
    color: ${(props) => props.theme.colorTextInputFormContact};
    background-color: ${(props) => props.theme.colorInputFormContact};
    border-radius: 3px;
    outline: none;
    border: none;
`;
