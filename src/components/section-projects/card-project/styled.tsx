import { styled } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component-props";

export const ContainerCardProject = styled.div<StyledComponentProps>`
    width: 20rem;
    margin-top: 2rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 4px #00000019;
`;

export const ContainerImg = styled.div<StyledComponentProps>`
    width: 100%;
    height: 200px;
    border-radius: 10px;
`;

export const ImgProject = styled.img<StyledComponentProps>`
    width: 100%;
    height: 100%;
    border-radius: 10px 10px 0 0;
    object-fit: cover;
`;

export const TitleCard = styled.h2<StyledComponentProps>`
    margin-top: 1rem;
    margin-bottom: 1.3rem !important;
    font-size: 1rem !important;
    color: ${(props) => props.theme.colorTitleCardProject}!important;
    font-weight: 800 !important;
`;

export const DescriptionCard = styled.p<StyledComponentProps>`
    font-size: 0.8rem !important;
    text-align: justify !important;
    padding: 0 1rem;
    color: ${(props) => props.theme.colorTitleCardProject}!important;
    font-weight: 100 !important;
    margin: 1rem 0 !important;
`;

export const TechsCard = styled.p<StyledComponentProps>`
    font-size: 0.7rem !important;
    margin-bottom: 1rem !important;
    text-align: start;
    margin-left: 1rem;
    font-weight: 500 !important;
    color: ${(props) => props.theme.colorTitleCardProject}!important;

    span {
        font-weight: 800;
        margin-right: 0.3rem;
    }
`;

export const ContainerFooter = styled.div<StyledComponentProps>`
    display: flex;
    margin-left: 1rem;
    margin-bottom: 1rem;
`;

export const FooterItem = styled.a<StyledComponentProps>`
    display: inline-block;
    margin-right: 2rem;
    color: ${props => props.theme.colorTitleCardProject};
    text-decoration: underline;

    &:hover {
        color: #007bff;
    }

    svg {
        margin-right: 5px;
    }
`;