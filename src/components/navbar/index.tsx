import { useResize } from "../../hooks/use-rezise";

import NavbarDrawer from "./navbar-drawer";
import NavbarFullScreen from "./navbar-full-screen";

export const Navbar = () => {
    const { windowWidth } = useResize();

    if (windowWidth > 768) {
        return <NavbarFullScreen />
    } else {
        return <NavbarDrawer />
    }
};
