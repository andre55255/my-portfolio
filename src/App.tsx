import { CookiesProvider } from "react-cookie";
import { RouterProvider } from "react-router";
import Router from "./routes/router";

const App = () => {
    return (
        <CookiesProvider>
            <RouterProvider router={Router} />
        </CookiesProvider>
    );
}

export default App;