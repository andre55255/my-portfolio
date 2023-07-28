import { FaBars } from "react-icons/fa";
import Logo from "../logo";
import NavbarWrapper from "../navbar-wrapper";
import IconHamburgerContainer from "../icon-hamburger-container";
import { useState } from "react";
import Drawer from "../drawer";
import DrawerContent from "../drawer-content";

export default function NavbarDrawer() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
        <>
            <NavbarWrapper>
                <Logo />
                <IconHamburgerContainer onClick={toggleDrawer}>
                    <FaBars />
                </IconHamburgerContainer>
            </NavbarWrapper>
            <Drawer isOpen={isOpen}>
                <DrawerContent toggleDrawer={toggleDrawer} />
            </Drawer>
        </>
    );
}
