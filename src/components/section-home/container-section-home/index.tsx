import { styled } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component-props";

const ContainerSectionHome = styled.section<StyledComponentProps>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 4rem;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

export default ContainerSectionHome;