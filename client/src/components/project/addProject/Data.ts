import { IconType } from "react-icons";
import { CiDesktop, CiMobile3 } from "react-icons/ci";
import { IoTabletLandscapeOutline } from "react-icons/io5";

export interface Device {
    id: number;
    name: string;
    aspectRatio: string;
    icon: IconType;
}


export const DEVICE_LIST: Device[] = [
    {
        id: 1,
        name: "desktop",
        aspectRatio: "16/9",
        icon: CiDesktop
    },
    {
        id: 2,
        name: "tablet",
        aspectRatio: "4/3",
        icon: IoTabletLandscapeOutline
    },
    {
        id: 3,
        name: "mobile",
        aspectRatio: "9/16",
        icon: CiMobile3
    }
]