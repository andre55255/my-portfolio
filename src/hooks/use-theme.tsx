import { useState } from "react";
import { darkTheme, lightTheme } from "../helpers/theme-styled";
import { StyledComponentProps } from "../types/styled-component-props";

interface UseThemeProps {
    theme: "light" | "dark";
    themeToggler: () => void;
    getTheme: StyledComponentProps;
}

export function useTheme(): UseThemeProps {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    const getTheme: StyledComponentProps = () =>
        theme === "light" ? lightTheme : darkTheme;

    return { theme, themeToggler, getTheme };
}
