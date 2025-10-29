import { IconType } from "react-icons";
import { CiDesktop, CiMobile3 } from "react-icons/ci";
import { IoTabletLandscapeOutline } from "react-icons/io5";

export interface Role {
    id: number;
    name: string;
    Icon: IconType;
}

export interface Device {
    id: number;
    name: string;
    aspectRatio: string;
    icon: IconType;
}

export const ROLES: Role[] = [
    {
        id: 1,
        name: "pm",
        Icon: CiDesktop
    },
    {
        id: 2,
        name: "dba",
        Icon: CiDesktop
    },
    {
        id: 3,
        name: "fe",
        Icon: CiDesktop
    },
    {
        id: 4,
        name: "be",
        Icon: CiDesktop
    },
    {
        id: 5,
        name: "designer",
        Icon: CiDesktop
    },
    {
        id: 6,
        name: "marketer",
        Icon: CiDesktop
    },
    {
        id: 7,
        name: "planner",
        Icon: CiDesktop
    }
];

export const DEVICES: Device[] = [
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