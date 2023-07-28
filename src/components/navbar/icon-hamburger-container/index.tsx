import { styled } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component-props";

const IconHamburgerContainer = styled.div<StyledComponentProps>`
    margin-right: 4rem;
    margin-left: 2rem;
    
    > svg {
        cursor: pointer;
        font-size: 1.8rem;
        color: ${props => props.theme.colorHamburgerIcon};
        
        &:hover {
            font-size: 1.82rem;
        }
    }
`;

export default IconHamburgerContainer;