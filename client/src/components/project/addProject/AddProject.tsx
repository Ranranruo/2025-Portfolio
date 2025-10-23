import { Fragment, useEffect, useState } from "react";
import StyledAddProject from "./StyledAddProject";
import { DEVICE_LIST } from "./Data";

const AddProject = () => {
    const [currentDeviceType, setDeviceType] = useState(DEVICE_LIST[0].name);
    const changeDeviceType = (deviceType: string) => setDeviceType(()=>deviceType);
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
                                onClick={()=>changeDeviceType(device.name)}
                                className={currentDeviceType === device.name ? "active" : ""}
                            >
                                <device.icon />
                                <p>{device.name}</p>
                            </li>
                            )}
                        </ul>
                    </div>
                </form>
            </div>       
        </StyledAddProject>
    );
}

export default AddProject;