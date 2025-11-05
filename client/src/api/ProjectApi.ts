import { create } from "zustand";
import { Skills } from "../components/Skill";
import { supabase } from "../db/Supabase";

interface Project {
    id: number;
    title: string;
    description: string;
    details: string;
    roles: string[];
    skills: Skills[];
    device: string;
    titleImage: string | null;
    subImages: string[];
    pageImages: {
        name: string,
        file: string
    }[],
    githubUrl: string,
    deployUrl: string
}

export interface AddProject {
    title: string;
    description: string;
    details: string;
    roles: string[];
    skills: Skills[];
    device: string;
    titleImage: File | null;
    subImages: File[];
    pageImages: {
        name: string,
        file: File
    }[],
    githubUrl: string,
    deployUrl: string
}

interface ProjectState {
    projects: Project[],
    getProjects: () => Promise<Project[] | null>,
    getProjectsCount: () => Promise<number>,
    addProject: (project: AddProject)=> Promise<boolean>
}

const useProjectApi = create<ProjectState>((set)=>({
    projects: [],
    getProjectsCount: async () => {
        const {data: projects, error} = await supabase
                .from("project")
                .select<"*", Project>("*");
        if(error || !projects) return -1;
        return projects.length;
    },
    getProjects: async () => {
         const {data: projects, error} = await supabase
                .from("project")
                .select<"*", Project>("*");
        return projects;
    },
    addProject: async (project) => {
        await supabase.auth.signInWithPassword({
            email: localStorage.getItem("email") ?? "",
            password: localStorage.getItem("password") ?? ""
        });
        if(!project.titleImage) return false;
        const titleImageUrl = `title-images/${crypto.randomUUID()}.png`;
        const { data, error} = await supabase.storage
            .from('projects')
            .upload(titleImageUrl, project.titleImage)
        if(error) {
            console.log(error);
            alert("Failed to upload title image.");
            return false;
        }
        const {data: publicData} = supabase.storage
            .from('projects')
            .getPublicUrl(data.path);
        const titleImageUploadUrl = publicData.publicUrl;
        let subImageUploadUrl: string[] = [];
        for(const subImage of project.subImages) {
            const subImageUrl = `sub-images/${crypto.randomUUID()}.png`;
            const {data, error} = await supabase.storage
                .from('projects')
                .upload(subImageUrl, subImage)
            if(error) {
                console.log(error);
                alert("Failed to upload sub images.");
                return false;
            }
            const {data: publicData} = supabase.storage
                .from('projects')
                .getPublicUrl(data.path);
            subImageUploadUrl.push(publicData.publicUrl);
        }
        const pageImages = [];
        for(const pageImage of project.pageImages) {
            const subImageUrl = `page-images/${crypto.randomUUID()}.png`;
            const {data, error} = await supabase.storage
                .from('projects')
                .upload(subImageUrl, pageImage.file)
            if(error) {
                console.log(error);
                alert("Failed to upload page images.");
                return false;
            }
            const {data: publicData} = supabase.storage
                .from('projects')
                .getPublicUrl(data.path);
            pageImages.push({name: pageImage.name, url: publicData.publicUrl});
        }

        supabase
            .from('project')
            .insert({
                title: project.title,
                description: project.description,
                roles: project.roles,
                skills: project.skills,
                device: project.device,
                titleImage: titleImageUploadUrl,
                subImages: subImageUploadUrl,
                pageImages: pageImages,
                githubUrl: project.githubUrl,
                deployUrl: project.deployUrl
            })
            .then(({data, error}) => {
                if(error) {
                    console.log(error);
                    return false;
                }
                return false;
            });
        return true;
    }
}));

export default useProjectApi