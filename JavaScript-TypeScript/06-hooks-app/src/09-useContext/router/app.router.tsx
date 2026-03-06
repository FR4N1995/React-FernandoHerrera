import { createBrowserRouter, Navigate } from "react-router";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { AboutPages } from "../pages/about/aboutPages";
import { LoginPage } from "../pages/auth/loginPage";



export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AboutPages />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" />
  }
]);