import { styled } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component-props";

export const LabelSectionContact = styled.label<StyledComponentProps>`
    color: ${(props) => props.theme.colorLabelFormContact};
    font-size: 1rem;
    margin-top: 1rem;
`;

export const InputSectionContact = styled.input<StyledComponentProps>`
    padding: 0.5rem 0.5rem;
    margin-right: 4rem;
    color: ${(props) => props.theme.colorTextInputFormContact};
    background-color: ${(props) => props.theme.colorInputFormContact};
    border-radius: 3px;
    outline: none;
    border: none;
`;

export const FormHelperError = styled.small<StyledComponentProps>`
    font-size: .8rem;
    color: #FF6347;
`;