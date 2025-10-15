import { useEffect, useState } from "react";
import StyledAddProject from "./StyledAddProject";
import { DEVICE_LIST } from "./Data";

const AddProject = () => {
    const [deviceId, setDeviceId] = useState(DEVICE_LIST[0].id);
    return (
        <StyledAddProject>
            <div className="container">
                <h1 className="title">New project</h1>
                <form className="container">
                    <div className="device container">
                        {DEVICE_LIST.map(device => (
                            <>
                                <input type="radio" id={"device"+device.id} name="device" checked={deviceId == device.id} hidden/>
                                <label htmlFor={"device"+device.id}>Desktop</label>
                            </>
                        ))}

                    </div>
                </form>
            </div>       
        </StyledAddProject>
    );
}

export default AddProject;