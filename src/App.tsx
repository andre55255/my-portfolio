import { CookiesProvider } from "react-cookie";
import { RouterProvider } from "react-router";
import Router from "./routes/router";
import { useTheme } from "./hooks/use-theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { PortfolioDataProvider } from "./providers/portfolio-data-provider";

const App = () => {
    const { getTheme } = useTheme();

    return (
        <CookiesProvider>
            <ThemeProvider theme={() => getTheme()}>
                <PortfolioDataProvider>
                    <GlobalStyles />
                    <RouterProvider router={Router} />
                </PortfolioDataProvider>
            </ThemeProvider>
        </CookiesProvider>
    );
};

export default App;
