import clsx from "clsx"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

export const CharacterInfo = ({ title, description, className, icon }: { title: string, description: string, className?: string, icon: string | StaticImport }) => {
    return (
        <div className={clsx("flex items-center w-full", className)}>
            <Image className="mr-4" src={icon} alt="character-icon" width={36} height={36} />
            <div className="flex flex-col w-full">
                <span className="font-bold poppins text-[#42b4ca]">{title}</span>
                <span className="font-semibold">{description}</span>
            </div>
        </div>)
}