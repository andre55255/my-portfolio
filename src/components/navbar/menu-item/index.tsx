import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface AuxPropsMenuItem {
    route?: string;
    anchor?: string;
    children: ReactNode;
}

export default function MenuItem({ route, anchor, children }: AuxPropsMenuItem) {
    return (
        <li>
            {anchor && <a href={anchor}>{children}</a>}
            {route && <Link to={route}>{children}</Link>}
        </li>
    );
}