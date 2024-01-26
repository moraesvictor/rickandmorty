import Image from "next/image";
import alive from '@/assets/alive_icon.svg'
import dead from '@/assets/dead_icon.svg'
import unknown from '@/assets/unknown_icon.svg'

export const renderStatus = (status: string) => {
    if (status === "Alive")
        return <Image src={alive} width={20} height={20} alt="alive-icon" />;
    if (status === "Dead")
        return <Image src={dead} width={20} height={20} alt="dead-icon" />;
    return <Image src={unknown} width={20} height={20} alt="unknown-icon" />;
};


export const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}