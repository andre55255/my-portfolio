import { styled } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component-props";

const ContainerSectionStacks = styled.section<StyledComponentProps>`
    margin-top: 8rem;
    text-align: center;
    padding: 1rem 0;
    margin-right: 4rem;

    h2, p {
        color: ${props => props.theme.textColor};
    }

    h2 {
        font-weight: 800;
        font-size: 1.8rem;
        margin-bottom: .3rem;
    }

    p {
        font-weight: 600;
        font-size: 1.3rem;
        margin-bottom: 2rem;
    }
`;

export default ContainerSectionStacks;