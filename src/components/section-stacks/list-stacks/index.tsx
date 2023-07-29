import { styled } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component-props";

const ListStacks = styled.ul<StyledComponentProps>`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4rem;
    list-style: none;
    padding: 0;
    max-width: 1300px;
    margin: 0 auto;
`;

export default ListStacks;