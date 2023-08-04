import { styled } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component-props";

interface StackItemProps extends StyledComponentProps {
    colorStack: string | any;
}

const StackItem = styled.li<StackItemProps>`
    margin: 0 .7rem;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;

    span {
        font-size: 1rem;
        text-align: center;
        color: ${props => props.colorStack ?? props.theme.textColor};
    }

    img {
        width: 6rem;
    }
    
    svg {
        font-size: 5rem;
        color: ${props => props.colorStack ?? props.theme.colorIconStacks};
    }
`;

export default StackItem;