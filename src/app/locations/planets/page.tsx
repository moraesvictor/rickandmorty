"use client";

import { fetchCharacter, fetchLocationsByType, fetchMultiplesCharacter } from "@/app/lib/actions";
import { useState } from "react";
import { useQuery } from "react-query";
import { LocationRow } from "./components/LocationRow";
import xablau from '@/assets/dimension-icon.svg'
import created from '@/assets/created-icon.svg'
import residentsIcon from '@/assets/residents-icon.svg'



export default function Planets() {
    const [page, setPage] = useState(1)

    const { data } = useQuery({ queryFn: async () => await fetchLocationsByType({ page, type: 'planet' }), queryKey: ['planet-locations', page] })

    const locations = data?.results || [];

    return (
        <div>
            {locations.map((location) => {
                return (
                    <div className="flex flex-col justify-center px-20">
                        <LocationRow
                            infos={
                                [
                                    { description: location.dimension, icon: xablau },
                                    { description: new Date(location.created).toLocaleDateString('pt-br'), icon: created },
                                    { icon: residentsIcon }
                                ]}
                            planetName={location.name || ""}
                            residentsUrl={location.residents}
                        />

                        <div className="h-[2px] w-full bg-[#bfde42] col-span-12" />

                    </div>

                );
            })}
        </div>
    );
}