import { styled } from "styled-components";
import { StyledComponentProps } from "../../types/styled-component-props";

export const FooterContainer = styled.div<StyledComponentProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2.5rem 0;
    flex-wrap: wrap;
    gap: 2rem;
`;

export const FooterItem = styled.span<StyledComponentProps>`
    color: ${(props) => props.theme.textMenuColor};
    font-size: 1rem;
    font-weight: 400;
`;

export const FooterSeparate = styled.hr<StyledComponentProps>`
    background-color: ${(props) => props.theme.textMenuColor};
    margin-right: 4rem;
`;

export const FooterSignature = styled.small<StyledComponentProps>`
    color: ${(props) => props.theme.textMenuColor};
    font-size: 1rem;
    font-weight: 400;
    margin-right: 4rem;

    svg {
        vertical-align: middle;
        font-size: 1.2rem;
        color: #F70707;
    }
`;

export const FooterContact = styled.div<StyledComponentProps>`
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
`;
