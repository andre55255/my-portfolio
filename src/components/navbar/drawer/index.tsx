import { styled } from "styled-components";

interface DrawerProps {
    isOpen: boolean;
}

const Drawer = styled.div<DrawerProps>`
    width: 300px;
    height: 100vh;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: ${(props) => (props.isOpen ? "0" : "-300px")};
    transition: right 0.3s ease;
`;

export default Drawer;