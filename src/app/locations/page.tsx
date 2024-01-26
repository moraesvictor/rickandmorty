import Link from "next/link";
import Image from "next/image";
import planets from '@/assets/planets-filter.svg'
import others from '@/assets/others-filter.svg'


export default function Locations() {
    return (
        <div className="h-[calc(100vh-457px)]">
            <div className="w-full h-full flex justify-center items-center">
                <Link href="locations/planets" className="border-[3px] rounded-2xl border-[#42b4ca] h-80 w-72 mr-10 flex flex-col items-center justify-center">
                    <Image alt="planets icon" src={planets} width={150} height={150} />
                    <span className="text-4xl mt-9 font-semibold">Planets</span>
                </Link>
                <Link href="locations/others" className="border-[3px] rounded-2xl border-[#42b4ca] h-80 w-72 flex flex-col items-center justify-center">
                    <Image alt="planets icon" src={others} width={150} height={150} />
                    <span className="text-4xl mt-9 font-semibold">Others</span>
                </Link>
            </div>
        </div>);
}