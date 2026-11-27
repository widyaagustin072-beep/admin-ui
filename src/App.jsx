import "./App.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ErrorPage from "./pages/error";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage/>,
      errorElement: <ErrorPage/>,
    },

    {
      path: "/login",
      element: <SignIn/>,
    },
    {
      path: "/register",
      element: <SignUp/>,
    },
    {
      path: "/balance",
      element: <BalancePage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;