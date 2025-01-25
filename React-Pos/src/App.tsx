import {Dashboard} from "./pages/Dashboard.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RouteLayout} from "./Components/RouteLayout.tsx";
import {Customer} from "./pages/Customer.tsx";
import {Error} from "./Components/Error.tsx";
import {CustomerProvider} from "./contexts/CustomerProvider.tsx";
import {Item} from "./pages/Item.tsx";
import {ItemProvider} from "./contexts/ItemProvider.tsx";
import {Orders} from "./pages/Orders.tsx";

function App(){
    const routes = createBrowserRouter([
        {
            path: "/",
                element: <RouteLayout/>,
                children: [
                    {path: '/', element: <Dashboard/>},
                    {path: '/customer', element: <Customer/>},
                    {path: '/item', element: <Item/>},
                    {path: '/orders', element: <Orders/>},
                ]
        },
    {path: '*', element: <Error/>}
    ])

    return(
        <CustomerProvider>
            <ItemProvider>
                <RouterProvider router={routes}></RouterProvider>
            </ItemProvider>
        </CustomerProvider>)
}

export default App;