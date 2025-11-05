import { ChangeEvent, Fragment, useEffect, useState } from "react";
import StyledAddProject from "./StyledAddProject";
import { Device, DEVICES, ROLES } from "./Data";
import { FaCloudUploadAlt } from "react-icons/fa";
import { LuFiles } from "react-icons/lu";
import { CiCirclePlus } from "react-icons/ci";
import { MdDeleteForever, MdOutlineArrowBackIos } from "react-icons/md";
import Skill, { SKILLS } from "../../Skill";
import { supabase } from "../../../db/Supabase";
import useProjectApi from "../../../api/ProjectApi";
import type { AddProject } from "../../../api/ProjectApi";

type Skills = typeof SKILLS[number];

const initialProjectData: AddProject = {
    title: "",
    description: "",
    details: "",
    roles: [],
    skills: [],
    device: DEVICES[0].name,
    titleImage: null,
    subImages: [],
    pageImages: [],
    githubUrl: "",
    deployUrl: ""
};

const AddProject = () => {
    const createProject = useProjectApi((state)=>state.addProject)

    const [projectData, setProjectData] = useState<AddProject>(initialProjectData);
    const [showRoles, setRolesVisible] = useState(false);
    const [showSkills, setSkillsVisible] = useState(false);

    const currentDevice = DEVICES.find(device => device.name === projectData.device) || DEVICES[0];
    const titleImageUrl = projectData.titleImage ? URL.createObjectURL(projectData.titleImage) : "";

    const addProject = async () => {
        
        if(projectData.title.replaceAll(" ", "") === "") 
            return alert("Title is required.");
        if(projectData.roles.length === 0)
            return alert("At least one role is required.");
        if(projectData.skills.length === 0)
            return alert("At least one skill is required.");
        if(!projectData.titleImage)
            return alert("Title image is required.");

        const ok = await createProject(projectData);
        if(ok) alert("Project added successfully.");
        else alert("Failed to add project.");
        setProjectData(initialProjectData);
    }

    const inputTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setProjectData(prev=>({...prev, title: e.target.value}));
    }
    const inputDescription = (e: ChangeEvent<HTMLInputElement>) => {
        setProjectData(prev=>({...prev, description: e.target.value}));
    }
    const inputDetails = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setProjectData(prev=>({...prev, details: e.target.value}));
    }
    const toggleShowRoles = () => {
        setRolesVisible(prev=>!prev);
    }
    const changeDevice = (device: Device) => {
        setProjectData(prev=>({...prev, device: device.name}));
    }
    const addRole = (roleName: string) => {
        setProjectData(prev=>({
            ...prev,
            roles: prev.roles.includes(roleName) ? prev.roles : [...prev.roles, roleName]
        }));
    }
    const removeRole = (roleName: string) => {
        setProjectData(prev=>({
            ...prev,
            roles: prev.roles.filter(role => role !== roleName)
        }));
    }
    const toggleShowSkills = () => {
        setSkillsVisible(prev=>!prev);
    }
    const addSkill = (skillName: Skills) => {
        setProjectData(prev=>({
            ...prev,
            skills: prev.skills.includes(skillName) ? prev.skills : [...prev.skills, skillName]
        }));
    }
    const removeSkill = (skillName: Skills) => {
        setProjectData(prev=>({
            ...prev,
            skills: prev.skills.filter(skill => skill !== skillName)
        }));
    }
    const changeTitleImage = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setProjectData(prev=>({...prev, titleImage: file})); 
        }
    }
    const addSubImage = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files.length > 0) {
            const filesArray = Array.from(e.target.files);
            setProjectData(prev=>({...prev, subImages: [...prev.subImages, ...filesArray]})); 
        }
    }
    const removeSubImage = (index: number) => {
        setProjectData(prev=>({
            ...prev,
            subImages: prev.subImages.filter((_, i) => i !== index)
        }));
    }
    const addPageImage = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const pageName = prompt("input page name");
            if(!pageName) return alert("page name require");
            setProjectData(prev=>({...prev, pageImages: [...prev.pageImages, {name: pageName, file: file}]})); 
        }
    }
     const removePageImage = (index: number) => {
        setProjectData(prev=>({
            ...prev,
            pageImages: prev.pageImages.filter((_, i) => i !== index)
        }));
    }
    const inputGithubUrl = (e: ChangeEvent<HTMLInputElement>) => {
        setProjectData(prev=>({...prev, githubUrl: e.target.value}));
    }
    const inputDeployUrl = (e: ChangeEvent<HTMLInputElement>) => {
        setProjectData(prev=>({...prev, deployUrl: e.target.value}));
    }
    return (
        <StyledAddProject>
            <div className="container">
                <div className="title">
                    <h1>Add New project</h1>
                    <p>프로젝트 등록 페이지 (관리자 전용)</p>
                </div>
                <form className="container">
                    <div className="title container">
                        <div className="texts">
                            <h2>Title *</h2>
                            <p>프로젝트 제목 (필수)</p>
                        </div>
                        <div className="container">
                            <input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Input here"
                                onInput={inputTitle}
                                value={projectData.title}
                            />
                        </div>
                    </div>
                    <div className="description container">
                        <div className="texts">
                            <h2>Description</h2>
                            <p>프로젝트 설명 (선택)</p>
                        </div>
                        <div className="container">
                            <input
                                type="text"
                                name="description"
                                id="description"
                                placeholder="Input here"
                                onInput={inputDescription}
                                value={projectData.description}
                            />
                        </div>
                    </div>
                    <div className="details container">
                        <div className="texts">
                            <h2>Details</h2>
                            <p>세부 사항 (선택)</p>
                        </div>
                        <div className="container">
                            <textarea
                                name="details"
                                id="details"
                                placeholder="Input here"
                                onInput={inputDetails}
                            >
                                {projectData.details}
                            </textarea>
                        </div>
                    </div>
                    <div className="role container">
                        <div className="texts">
                            <h2>Roles *</h2>
                            <p>프로젝트 역할 (필수)</p>
                        </div>
                        <div className="container">
                            <ul className="selected-roles">
                                {projectData.roles.map((roleName, index) => 
                                <li
                                    key={index}
                                    onClick={()=>removeRole(roleName)}
                                >
                                    {roleName}
                                </li>
                                )}
                            </ul>
                            <div className="toggle-show-roles container">
                                <input
                                    type="checkbox"
                                    onChange={toggleShowRoles}
                                    id="toggle-show-roles"
                                    hidden
                                    checked={showRoles}
                                    />
                                <label htmlFor="toggle-show-roles">
                                    {showRoles ? "접기" : "펼치기"}
                                    <span>&lt;</span>
                                </label>
                            </div>
                            <ul className="roles">
                                {!showRoles ?  "" : 
                                ROLES
                                    .filter((role)=>!projectData.roles.includes(role.name))
                                    .map((role, index) =>
                                <li
                                    key={index}
                                    onClick={() => addRole(role.name)}
                                >
                                    <role.Icon />
                                    <p>{role.name}</p>
                                </li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="skills container">
                        <div className="texts">
                            <h2>Skills *</h2>
                            <p>프로젝트 기술 (필수)</p>
                        </div>
                        <div className="container">
                            <ul className="selected-skills">
                                {projectData.skills.map((skillName, index) => 
                                <li
                                    key={index}
                                    onClick={()=>removeSkill(skillName)}
                                >
                                    <Skill
                                        name={skillName}
                                        theme="light"
                                        size={30}
                                    />
                                </li>
                                )}
                            </ul>
                            <div className="toggle-show-skills container">
                                <input
                                    type="checkbox"
                                    onChange={toggleShowSkills}
                                    id="toggle-show-skills"
                                    hidden
                                    checked={showSkills}
                                    />
                                <label htmlFor="toggle-show-skills">
                                    {showRoles ? "접기" : "펼치기"}
                                    <span>&lt;</span>
                                </label>
                            </div>
                            <ul className="skills">
                                {!showSkills ?  "" : 
                                SKILLS
                                    .filter((skill)=>!projectData.skills.includes(skill))
                                    .map((skill, index) =>
                                <li
                                    key={index}
                                    onClick={() => addSkill(skill)}
                                >
                                    <Skill
                                        name={skill}
                                        theme="light"
                                        size={30}
                                    />
                                </li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="device container">
                        <div className="texts">
                            <h2>Device Type *</h2>
                            <p>대표 디바이스 종류 (필수)</p>
                        </div>
                        <div className="container">
                            {DEVICES.map((device, index) =>
                            <Fragment key={index}>
                                <input
                                    type="radio"
                                    name="device"
                                    value={device.name}
                                    id={`device-${index}`}
                                    hidden
                                    onChange={()=>changeDevice(device)}
                                    checked={projectData.device === device.name}
                                />
                                <label
                                    htmlFor={`device-${index}`}
                                    className={projectData.device === device.name ? "active" : ""}
                                >
                                    <device.icon />
                                    <p>{device.name}</p>
                                </label>
                            </Fragment>
                            )}
                        </div>
                    </div>
                    <div className="title-image container">
                        <div className="texts">
                            <h2>Title Image *</h2>
                            <p>프로젝트 대표 이미지 (필수)</p>
                        </div>
                        <input
                            type="file"
                            id="title-image"
                            name="title-image"
                            hidden
                            accept="image/*"
                            onChange={changeTitleImage}
                        />
                        <label
                            htmlFor="title-image"
                            style={{
                                aspectRatio: currentDevice.aspectRatio,
                                backgroundImage: titleImageUrl ? `url(${titleImageUrl})` : 'none',
                            }}
                        >
                            { !titleImageUrl && <>
                                <FaCloudUploadAlt />
                                <h2>Upload a title image for your project</h2>
                                <p>Supports: JPG, PNG</p>
                            </>}
                        </label>
                    </div>
                    <div className="sub-image container">
                        <div className="texts">
                            <h2>Sub Images</h2>
                            <p>프로젝트 서브 이미지 (16:9)</p>
                            <input
                                type="file"
                                id="sub-image"
                                name="sub-image"
                                accept="image/*"
                                multiple
                                hidden
                                onChange={addSubImage}
                            />
                        </div>
                        <div className="container">
                            <label htmlFor="sub-image"><CiCirclePlus /></label>
                            <ul>
                            {projectData.subImages.map((image, index) => {
                                const imageUrl = URL.createObjectURL(image);
                                return (
                                    <li
                                    key={index}
                                    style={{backgroundImage: `url(${imageUrl})`}}
                                    onClick={() => removeSubImage(index)}
                                    >
                                        <div className="close">
                                            <MdDeleteForever />
                                        </div>
                                    </li>
                                );
                            })}
                            </ul>
                        </div>
                    </div>
                    <div className="page-image container">
                        <div className="texts">
                            <h2>page Images</h2>
                            <p>프로젝트 서브 이미지 (16:9)</p>
                            <input
                                type="file"
                                id="page-image"
                                name="page-image"
                                accept="image/*"
                                multiple
                                hidden
                                onChange={addPageImage}
                            />
                        </div>
                        <div className="container">
                            <label htmlFor="page-image"><CiCirclePlus /></label>
                            <ul>
                            {projectData.pageImages.map((page, index) => {
                                const imageUrl = URL.createObjectURL(page.file);
                                return (
                                    <li
                                    key={index}
                                    style={{backgroundImage: `url(${imageUrl})`}}
                                    onClick={() => removePageImage(index)}
                                    >
                                        <p className="page-name">{page.name}</p>
                                        <div className="close">
                                            <MdDeleteForever />
                                        </div>
                                    </li>
                                );
                            })}
                            </ul>
                        </div>
                    </div>
                    <div className="github container">
                        <div className="texts">
                            <h2>Github </h2>
                            <p>깃허브 주소</p>
                        </div>
                        <div className="container">
                            <input
                                type="text"
                                name="github"
                                id="github"
                                placeholder="Input here"
                                onInput={inputGithubUrl}
                                value={projectData.githubUrl}
                            />
                        </div>
                    </div>
                    <div className="deploy container">
                        <div className="texts">
                            <h2>Deploy</h2>
                            <p>배포 주소</p>
                        </div>
                        <div className="container">
                            <input
                                type="text"
                                name="deploy"
                                id="deploy"
                                placeholder="Input here"
                                onInput={inputDeployUrl}
                                value={projectData.deployUrl}
                            />
                        </div>
                    </div>
                    <div className="submit container">
                        <button type="button" onClick={addProject}>프로젝트 추가</button>
                    </div>
                </form>
            </div>       
        </StyledAddProject>
    );
}

export default AddProject;