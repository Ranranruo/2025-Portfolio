import { RouteObject } from "react-router-dom";
import ProjectPage from "../pages/project/ProjectPage";
import AddProjectPage from "../pages/project/AddProjectPage";

const ProjectRoute: RouteObject[] = [
    {
        index: true,
        Component: ProjectPage
    },
    {
        path: 'new',
        Component: AddProjectPage
    }
];

export default ProjectRoute;