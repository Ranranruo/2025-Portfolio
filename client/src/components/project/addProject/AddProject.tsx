import { ChangeEvent, useEffect, useState } from "react";
import StyledAddProject from "./StyledAddProject";
import { Device, DEVICE_LIST } from "./Data";
import { FaCloudUploadAlt } from "react-icons/fa";
import { LuFiles } from "react-icons/lu";
import { CiCirclePlus } from "react-icons/ci";

interface AddProjectRequest {
    device: string;
    titleImage: File | null;
    subImages: File[];
}

const initialProjectData: AddProjectRequest = {
    device: DEVICE_LIST[0].name,
    titleImage: null,
    subImages: []
};

const AddProject = () => {
    const [projectData, setProjectData] = useState<AddProjectRequest>(initialProjectData);

    const currentDevice = DEVICE_LIST.find(device => device.name === projectData.device) || DEVICE_LIST[0];
    const titleImageUrl = projectData.titleImage ? URL.createObjectURL(projectData.titleImage) : "";

    const changeDevice = (device: Device) => {
        setProjectData(prev=>({...prev, device: device.name}));
    }
    const addSubImage = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files.length > 0) {
            const filesArray = Array.from(e.target.files);
            setProjectData(prev=>({...prev, subImages: [...prev.subImages, ...filesArray]})); 
        }
    }
    const changeTitleImage = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setProjectData(prev=>({...prev, titleImage: file})); 
        }
    }
    return (
        <StyledAddProject>
            <div className="container">
                <div className="title">
                    <h1>Add New project</h1>
                    <p>프로젝트 등록 페이지 (관리자 전용)</p>
                </div>
                <form className="container">
                    <div className="device container">
                        <div className="texts">
                            <h2>Device Type *</h2>
                            <p>대표 디바이스 종류 (필수)</p>
                        </div>
                        <ul>
                            {DEVICE_LIST.map((device, index) =>
                            <li
                                key={index}
                                onClick={()=>changeDevice(device)}
                                className={projectData.device === device.name ? "active" : ""}
                            >
                                <input
                                    type="radio"
                                    name="device"
                                    value={device.name}
                                    hidden
                                    checked={projectData.device === device.name}
                                />
                                <device.icon />
                                <p>{device.name}</p>
                            </li>
                            )}
                        </ul>
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
                        <ul>
                            <label htmlFor="sub-image"><CiCirclePlus /></label>
                            {projectData.subImages.map((image, index) => {
                                const imageUrl = URL.createObjectURL(image);
                                return (
                                    <li
                                        key={index}
                                        style={{backgroundImage: `url(${imageUrl})`}}
                                        
                                    ></li>
                                );
                            })}
                        </ul>
                    </div>
                </form>
            </div>       
        </StyledAddProject>
    );
}

export default AddProject;