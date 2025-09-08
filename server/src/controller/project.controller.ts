import { put } from "@vercel/blob";
import { Request, Response } from "express"
import { Project } from "../model/project.model";

interface Files {
    titleImage?: Express.Multer.File[];
}

export const createProject = async (request: Request, response: Response) => {
    console.log(request.body);
    const files = request.files as Files;
    const project = new Project({name:"a"});
    await project.save();
    response.send("a");
}