import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import {RootLayout} from "./components/RootLayout.tsx";
import Dashboard from "./pages/Customer/DashboardC.tsx";
import Events from "./pages/Admin/Event.tsx";
import Booking from "./pages/Admin/Booking.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path: '/signUp',
            element: <SignUp/>,
        },
        {
            path: '/signIn',
            element:<SignIn/>
        },
        {
            path: "",
            element: <RootLayout />,
            children: [
                { path: "", element: <Dashboard /> },
                { path: "/events", element: <Events /> },
                { path: "/bookings", element: <Booking /> }
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
