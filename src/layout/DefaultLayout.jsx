import { Outlet } from "react-router-dom";

export default function DefaultLayout() {

    return (
        <>
            <header>CIAO MONDO</header>
            <Outlet />
        </>
    )
}