import { createBrowserRouter, Navigate } from "react-router";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { AboutPages } from "../pages/about/AboutPages";
import { LoginPage } from "../pages/auth/LoginPage";
import { PrivateRoute } from "./PrivateRoute";



export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AboutPages />,
  },
  {
    path: "/profile",
    // element: <ProfilePage />,
    element: <PrivateRoute element={<ProfilePage />} />,
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