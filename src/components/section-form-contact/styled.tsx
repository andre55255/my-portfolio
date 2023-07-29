import { styled } from "styled-components";
import { StyledComponentProps } from "../../types/styled-component-props";

export const FormSectionContact = styled.form<StyledComponentProps>`
    display: flex;
    flex-direction: column;
    margin-right: 4rem;

    margin: 2rem 0;
`;

export const LabelSectionContact = styled.label<StyledComponentProps>`
    color: ${(props) => props.theme.colorLabelFormContact};
    font-size: 1rem;
`;

export const InputSectionContact = styled.input<StyledComponentProps>`
    padding: 0.5rem 0.5rem;
    margin-bottom: 1rem;
    margin-right: 4rem;
    color: ${(props) => props.theme.colorTextInputFormContact};
    background-color: ${(props) => props.theme.colorInputFormContact};
    border-radius: 3px;
    outline: none;
    border: none;
`;

export const ButtonSectionContact = styled.button<StyledComponentProps>`
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
