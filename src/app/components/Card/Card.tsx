import Image from "next/image";
import alive from '@/assets/alive_icon.svg'
import dead from '@/assets/dead_icon.svg'
import unknown from '@/assets/unknown_icon.svg'

type CardProps = {
  imageUrl: string;
  status: string;
  name: string;
};

export const Card = ({ imageUrl, status, name }: CardProps) => {

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const renderStatus = () => {
    if (status === "Alive")
      return <Image src={alive} width={20} height={20} alt="alive-icon" />;
    if (status === "Dead")
      return <Image src={dead} width={20} height={20} alt="dead-icon" />;
    return <Image src={unknown} width={20} height={20} alt="unknown-icon" />;
  };
  return (
    <div className="flex flex-col shadow-md border-stone-900 rounded-md">
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
            {renderStatus()}
            <span className="text-gray-600 text-sm ml-2 poppins">{capitalizeFirstLetter(status)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
