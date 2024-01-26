import { fetchCharacter } from "@/app/lib/actions"
import Image from "next/image"
import { CharacterInfo } from "../components/CharacterInfo"
import species from '@/assets/species-icon.svg'
import subspecies from '@/assets/subspecies-icon.svg'
import gender from '@/assets/gender-icon.svg'
import origin from '@/assets/origin-icon.svg'
import location from '@/assets/localization-icon.svg'
import { StatusTag } from "../components/StatusTag"


export default async function Character({ params }: { params: { id: string } }) {

    const character = await fetchCharacter(params.id)

    return <div className="flex px-20 py-16 justify-center items-center">
        <Image width={300} height={300} className="border-8 border-[#bfde42] rounded-[50%]" src={character.image} alt="character-image" />
        <div className="grid grid-cols-12 ml-20 w-[800px] h-56">
            <div className="col-span-12 flex items-center">
                <h3 className="font-bold text-[50px]/[30px] mr-5">{character.name}</h3>
                <StatusTag status={character.status} />
            </div>
            <CharacterInfo icon={species} className="col-span-4" title="Species" description={character.species} />
            <CharacterInfo icon={subspecies} className="col-span-4" title="Type" description={character.type || "-"} />
            <CharacterInfo icon={gender} className="col-span-4" title="Gender" description={character.gender} />
            <CharacterInfo icon={origin} className="col-span-4" title="Origin" description={(character.origin.name || "-")} />
            <CharacterInfo icon={location} className="col-span-6" title="Location" description={character.location.name} />
        </div>
    </div>
}