import { Outlet } from "react-router-dom";
import Header from "../components/header";
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