import {Navigation} from "./Navigation.tsx";
import {Outlet} from "react-router";

export function RouteLayout() {
    return (
        <>
            <Navigation />
            <main className="poppins-regular p-4 text-base">
                <Outlet></Outlet>
            </main>

        </>
    );
}