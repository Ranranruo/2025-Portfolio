interface Device {
    id: number;
    name: string;
    aspectRatio: string;
}

export const DEVICE_LIST: Device[] = [
    {
        id: 1,
        name: "Desktop",
        aspectRatio: "16/9"
    },
    {
        id: 2,
        name: "Mobile",
        aspectRatio: "9/16"
    }
]