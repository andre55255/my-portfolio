import { styled } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component-props";

export const ImageContainer = styled.div<StyledComponentProps>`
    max-width: 100%;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    margin-top: 2rem;
    margin-right: 4rem;

    img {
        display: block;
        height: auto;
    }

    @media (min-width: 768px) {
        margin-top: 0;
        margin-left: 1rem;
        max-width: 300px;
    }
`;

export const ImageProfile = styled.img<StyledComponentProps>`
    width: 300px;
    border-radius: 50%;
    border: 0.12rem solid ${(props) => props.theme.primaryColor};
`;