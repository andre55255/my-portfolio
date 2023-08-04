import { keyframes, styled } from "styled-components";
import { StyledComponentProps } from "../../types/styled-component-props";

const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

export const ScrollButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color:  ${(props) => props.theme.primaryColor};
  color: white;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  animation: ${pulseAnimation} 2s infinite;
`;
