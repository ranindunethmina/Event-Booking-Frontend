import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import {RootLayout} from "./components/RootLayout.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Tickets from "./pages/Tickets.tsx";
import Events from "./pages/Event.tsx";

function App() {
    // const isAuthenticated = useSelector((state) => state.userReducer.isAuthenticated);

    const routes = createBrowserRouter([
        {
            path: "",
            element: <RootLayout />,
            children: [
                { path: "", element: <Dashboard /> },
                { path: "/events", element: <Events /> },
                { path: "/tickets", element: <Tickets /> },
                // { path: "/booking", element: <Booking /> }
            ]
        }
    ])

    return (
        <>
            <RouterProvider router={routes} />
        </>
    )
}

export default App;
