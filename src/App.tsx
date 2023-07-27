import { CookiesProvider } from "react-cookie";
import { RouterProvider } from "react-router";
import Router from "./routes/router";
import { useTheme } from "./hooks/use-theme";
import { ThemeProvider } from "styled-components";

const App = () => {
    const { getTheme } = useTheme();

    return (
        <ThemeProvider theme={getTheme}>
            <CookiesProvider>
                <RouterProvider router={Router} />
            </CookiesProvider>
        </ThemeProvider>
    );
}

export default App;