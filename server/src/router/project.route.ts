import { Router } from "express";
import { createProject } from "../controller/project.controller";
import { upload } from "../middleware/multer";

const projectRouter = Router();

projectRouter.post("/", upload.fields([
    {name: "titleImage", maxCount: 1}
]), createProject);

export default projectRouter;