import { Box } from "@chakra-ui/react";
import SideNav from "./SideNav";
import { RouterProvider } from "react-router-dom";
import { router } from "../RouterConfig/router";

export default function Home() {

    return (
        <Box className="w-full h-[screen] bg-white flex">
            <SideNav />
            <RouterProvider router={router} />
        </Box>
    )
}
