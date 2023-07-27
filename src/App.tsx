import { CookiesProvider } from "react-cookie";
import { RouterProvider } from "react-router";
import Router from "./routes/router";
import { useTheme } from "./hooks/use-theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";

const App = () => {
    const { getTheme } = useTheme();

    return (
        <CookiesProvider>
            <ThemeProvider theme={() => getTheme()}>
                <GlobalStyles />
                <RouterProvider router={Router} />
            </ThemeProvider>
        </CookiesProvider>
    );
};

export default App;
