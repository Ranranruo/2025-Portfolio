import { IconType } from "react-icons";
import { AiOutlineMobile } from "react-icons/ai";
import { BsDatabase } from "react-icons/bs";
import { CiDesktop, CiMobile3 } from "react-icons/ci";
import { FaDatabase, FaRegLightbulb } from "react-icons/fa";
import { GoLightBulb } from "react-icons/go";
import { HiDevicePhoneMobile, HiOutlineServerStack } from "react-icons/hi2";
import { IoShareSocialOutline, IoTabletLandscapeOutline } from "react-icons/io5";
import { MdManageAccounts, MdOutlineManageAccounts } from "react-icons/md";
import { PiPaintBrushBold } from "react-icons/pi";

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
        Icon: MdOutlineManageAccounts
    },
    {
        id: 2,
        name: "dba",
        Icon: BsDatabase
    },
    {
        id: 3,
        name: "fe",
        Icon: AiOutlineMobile
    },
    {
        id: 4,
        name: "be",
        Icon: HiOutlineServerStack
    },
    {
        id: 5,
        name: "designer",
        Icon: PiPaintBrushBold
    },
    {
        id: 6,
        name: "marketer",
        Icon: IoShareSocialOutline
    },
    {
        id: 7,
        name: "planner",
        Icon: GoLightBulb
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