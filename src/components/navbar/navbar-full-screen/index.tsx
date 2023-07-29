import Logo from "../logo/index";
import Menu from "../menu";
import NavbarWrapper from "../navbar-wrapper";
import SocialIcons from "../social-icon";

export default function NavbarFullScreen() {
    return (
        <NavbarWrapper>
            <Logo />
            <Menu />
            <SocialIcons />
        </NavbarWrapper>
    );
}
