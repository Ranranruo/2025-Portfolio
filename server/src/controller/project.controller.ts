import { put } from "@vercel/blob";
import { Request, Response } from "express"

interface Files {
    titleImage?: Express.Multer.File[];
}

export const createProject = async (request: Request, response: Response) => {
    const files = request.files as Files;
    
}