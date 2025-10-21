import { useEffect, useState } from "react";
import StyledAddProject from "./StyledAddProject";
import { DEVICE_LIST } from "./Data";

const AddProject = () => {
    const [deviceId, setDeviceId] = useState(DEVICE_LIST[0].id);
    const changeDevice = (deviceId: number) => setDeviceId(prev => deviceId);
    return (
        <StyledAddProject>
            <div className="container">
                <h1 className="title">New project</h1>
                <form className="container">
                    <div className="device container">
                        {DEVICE_LIST.map(device => (
                            <>
                                <input type="radio" id={"device"+device.id} name="device" checked={deviceId == device.id} hidden/>
                                <label htmlFor={"device"+device.id} onClick={()=>changeDevice(device.id)}>{device.name}</label>
                            </>
                        ))}
                    </div>
                    <div className="title-img container">
                        <input type="file" accept="image/*"/>
                        <label htmlFor="">
                            <img src="" alt="" />
                        </label>
                    </div>
                </form>
            </div>       
        </StyledAddProject>
    );
}

export default AddProject;