import { styled } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component-props";

const FormGeometry = styled.div<StyledComponentProps>`
    @media (min-width: 768px) {
        width: 300px;
        height: 300px;
        background-color: #8406d6;
        margin-left: 5rem;
        margin-right: 4rem;

        shape-outside: circle(50% at 30%);
        clip-path: circle(50% at 0%);

        border-radius: 10%;
        transform: rotate(90deg);
    }
    
`

export default FormGeometry;