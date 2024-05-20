import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import OurMenuPage from "../Pages/OurMenuPage/OurMenuPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/our-menu",
                element: <OurMenuPage></OurMenuPage>
            }
        ]
    },
]);