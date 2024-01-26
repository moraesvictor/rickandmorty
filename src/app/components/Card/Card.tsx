import { capitalizeFirstLetter, renderStatus } from "@/app/lib/utils";
import Image from "next/image";


type CardProps = {
  imageUrl: string;
  status: string;
  name: string;
  onClick?: () => void;
};

export const Card = ({ imageUrl, status, name, onClick }: CardProps) => {



  return (
    <div className="flex flex-col shadow-md border-stone-900 rounded-md cursor-pointer" onClick={onClick}>
      <Image
        className="rounded-t-md"
        src={imageUrl || ""}
        alt="card image"
        width="357"
        height="100"
      />
      <div className="bg-white px-2 py-3 pb-2 flex flex-col rounded-b-md">

        <div className="flex items-center justify-between">
          <span className="text-gray-600 text-sm ml-2 poppins font-bold">{name}</span>

          <div className="flex items-center">
            {renderStatus(status)}
            <span className="text-gray-600 text-sm ml-2 poppins">{capitalizeFirstLetter(status)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
