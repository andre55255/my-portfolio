import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

import { PublicRoute } from "./public-route";
import { ProtectedRoute } from "./protected-route";
import { routesPages } from "../helpers/routes-pages";
import { AuthLayout } from "./auth-layout";

import NotFoundPage from "../pages/public/not-found/index";
import MainPage from "../pages/public/main/index";
import AboutPage from "../pages/public/about";
import ContactPage from "../pages/public/contact";

const Router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* Auth Layout */}
            <Route element={<AuthLayout />}>
                
                {/* Public routes */}
                <Route element={<PublicRoute />}>
                    <Route path={routesPages.main} element={<MainPage />} />
                    <Route path={routesPages.about} element={<AboutPage />} />
                    <Route path={routesPages.contact} element={<ContactPage />} />
                </Route>

                {/* Protected routes */}
                <Route element={<ProtectedRoute />}>
                
                </Route>
            </Route>

            {/* Rota não encontrada */}
            <Route path="*" element={<NotFoundPage />} />
        </>
    )
);

export default Router;