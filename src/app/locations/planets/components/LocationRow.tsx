"use client"
import { InfoTag } from "@/app/components/infoTag/InfoTag";
import { fetchMultiplesCharacter } from "@/app/lib/actions";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useQuery } from "react-query";

type Info = {
    icon: string | StaticImport
    description?: string;
}

export const LocationRow = ({ planetName, infos, residentsUrl }: { planetName: string, infos: Info[], residentsUrl?: string[] }) => {

    return (
        <div className="h-[calc(100vh-457px)] flex px-10 py-10 items-center">
            <div className="flex justify-center items-center px-10 min-w-[45vw]">
                <span className="text-[40px]/[40px] font-bold">{planetName}</span>
            </div>

            <div className="h-full w-[2px] bg-slate-600" />

            <div className="flex items-center justify-center w-full px-20">
                <InfoTag icon={infos[0].icon} title="Dimension" description={infos[0].description} />
            </div>
        </div>
    );
}

const Resident = ({ residentUrl }: { residentUrl: string }) => {
    return (
        <div>
            <Image alt="residentUrl" src={residentUrl} className="rounded-[50%]" width={50} height={50} />
        </div>);
}