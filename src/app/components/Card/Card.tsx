import Image from "next/image";

type CardProps = {
  imageUrl: string;
  title: string;
  status: string;
  name: string;
};

export const Card = ({ imageUrl, title, status, name }: CardProps) => {
  const renderStatus = () => {
    if (status === "Alive")
      return <div className="w-4 h-4 bg-green-500 rounded-[50%]" />;
    if (status === "Dead")
      return <div className="w-4 h-4 bg-black rounded-[50%]" />;
    return <div className="w-4 h-4 bg-gray-500 rounded-[50%]" />;
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
      <div className="bg-white px-2 pb-2 flex flex-col rounded-b-md">
        <h3 className="font-bold text-sm">{title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {renderStatus()}
            <span className="text-gray-600 text-sm ml-2 poppins">{status}</span>
          </div>
          <span className="text-gray-600 text-sm ml-2 poppins">{name}</span>
        </div>
      </div>
    </div>
  );
};
