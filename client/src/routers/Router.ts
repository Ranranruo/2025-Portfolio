import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import ProjectRoute from "./ProjectRoute";

const MainPage = lazy(() => import("../pages/MainPage"));

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainPage
  }, 
  {
    path: '/projects',
    children: ProjectRoute
  }
])


export default router;