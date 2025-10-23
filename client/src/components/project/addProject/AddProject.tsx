import { Fragment, useState } from "react";
import StyledAddProject from "./StyledAddProject";
import { DEVICE_LIST } from "./Data";

const AddProject = () => {
    const [currentDevice, setDevice] = useState(DEVICE_LIST[0].name);
    const changeDevice = (deviceName: string) => setDevice(() => deviceName);
    return (
        <StyledAddProject>
            <div className="container">
                <h1 className="title">New project</h1>
                <form className="container">
                    <div className="title-img container">
                        <input id="title-image" type="file" accept="image/*" hidden/>
                        <label htmlFor="title-image">
                            <img
                                className={currentDevice.toLowerCase()}
                                src="/image/project/add.jpg"
                                alt=""
                            />
                        </label>
                    </div>
                    <div className="device container">
                        {DEVICE_LIST.map(device => (
                            <Fragment key={device.id}>
                                <input
                                    type="radio"
                                    id={"device"+device.id}
                                    name="device"
                                    checked={currentDevice == device.name}
                                    hidden
                                    onChange={()=>changeDevice(device.name)}
                                />
                                <label htmlFor={"device"+device.id}>
                                    {device.name}
                                </label>
                            </Fragment>
                        ))}
                    </div>
                </form>
            </div>       
        </StyledAddProject>
    );
}

export default AddProject;