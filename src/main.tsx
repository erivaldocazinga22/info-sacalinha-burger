import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

export const Routers = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
]); 


createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={Routers} />
    </StrictMode>,
);
