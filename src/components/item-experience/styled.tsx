import { styled } from "styled-components";
import { StyledComponentProps } from "../../types/styled-component-props";

export const ItemList = styled.ul<StyledComponentProps>`
    margin-right: 4rem;
`;

export const GroupItemTitleStatus = styled.div<StyledComponentProps>`
    display: flex;
    justify-content: space-between;
`;

export const Item = styled.li<StyledComponentProps>`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${(props) => props.theme.textMenuColor};
    padding-bottom: 1rem;
    padding-top: 1rem;
`;

export const ItemTitle = styled.div<StyledComponentProps>`
    font-size: 1rem;
    font-weight: 500;
    color: ${(props) => props.theme.textMenuColor};
`;

export const ItemStatus = styled.div<StyledComponentProps>`
    align-self: flex-end;
    background-color: #d7ffe0;
    color: #189a2e;
    padding: 5px 10px;
    border-radius: 5px;
`;

export const GroupItemEnterpriseData = styled.div<StyledComponentProps>`
    display: flex;
    gap: 1.2rem;
    margin-top: 0.5rem;
`;

export const ItemInfo = styled.div<StyledComponentProps>`
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    
    svg {
        margin-right: .5rem;
        color: ${(props) => props.theme.textMenuColor}!important;
    }
`;

export const Description = styled.span<StyledComponentProps>`
    font-size: 0.8rem;
    color: ${(props) => props.theme.textMenuColor};
`;
