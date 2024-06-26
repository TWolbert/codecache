import { Navbar } from "./components/navbar";
import "./main.css";
import { Outlet } from "react-router-dom";
export function Main() {

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}
