import { styled } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component-props";

const ContentHome = styled.div<StyledComponentProps>`
    max-width: 600px;
    margin: 2rem 4rem;

    h2,
    p {
        color: ${(props) => props.theme.textColor};
        letter-spacing: 0.1rem;
        margin-bottom: 0.1rem;
    }

    h2 {
        font-size: 2.5rem;
        font-weight: 800;
    }

    p {
        font-size: 2rem;
        font-weight: 600;

        span {
            background-image: linear-gradient(#001fff, #8406d6);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            font-size: 2.2rem;
        }
    }

    @media (min-width: 768px) {
        margin: 2rem 0;
    }
`;

export default ContentHome;