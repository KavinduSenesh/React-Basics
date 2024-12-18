import './App.css'
import {createBrowserRouter} from "react-router";
import {Dashboard} from "./pages/Dashboard.tsx";
import {RouterProvider} from "react-router/dom";
import {AddCustomer} from "./pages/AddCustomer.tsx";
import {Error} from "./component/Error.tsx";
import {RouteLayout} from "./component/RouteLayout.tsx";
import {CustomerProvider} from "./component/CustomerProvider.tsx";
import {UpdateCustomer} from "./pages/UpdateCustomer.tsx";


function App() {

    const routes = createBrowserRouter([
        {
            path: "/",
            element: <RouteLayout/>,
            children: [
                {path: '/', element: <Dashboard/>},
                {path:'add', element: <AddCustomer/>},
                {path:'update/:email', element: <UpdateCustomer/>}
            ]
        },
        {path: '*', element: <Error/>}
    ]);

    return (
        <>
            <CustomerProvider>
                <RouterProvider router={routes} >
                </RouterProvider>
            </CustomerProvider>

        </>
    )
}

export default App