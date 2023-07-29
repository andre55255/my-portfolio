import { styled } from "styled-components";
import { StyledComponentProps } from "../../types/styled-component-props";

export const ContainerAbout = styled.div<StyledComponentProps>`
    margin-top: 4rem;
`;

export const TitleAbout = styled.h2<StyledComponentProps>`
    color: ${(props) => props.theme.textColor};

    font-weight: bold;
    font-size: 1.8rem;
    margin-bottom: 0.3rem;
`;

export const DescriptionAbout = styled.p<StyledComponentProps>`
    color: ${(props) => props.theme.colorTitleCardProject};
    font-weight: 200;
    font-size: 1.2rem;
    margin: 2rem 0;
    max-width: 600px;
`;
