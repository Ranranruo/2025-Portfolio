import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const MainPage = lazy(() => import("../pages/MainPage"));

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainPage
  }
])


export default router;