import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../Routes/DashBoard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashBoard />,
    },
]);
