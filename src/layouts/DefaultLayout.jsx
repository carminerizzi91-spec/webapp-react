import Header from "../components/header";
import { Outlet } from "react-router-dom";

function DefaultLayout() {

    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>

        </>
    );
}

export default DefaultLayout