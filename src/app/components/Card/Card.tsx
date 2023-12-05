import Image from "next/image";

type CardProps = {
  imageUrl: string;
  title: string;
  status: string;
};

export const Card = ({ imageUrl, title, status }: CardProps) => {
  return (
    <div className="flex flex-col border border-stone-900 rounded-sm">
      <Image
        className="w-full"
        src={imageUrl || ""}
        alt="card image"
        width="100"
        height="100"
      />
      <div className="bg-white px-2 pb-2 flex flex-col">
        <h3 className="font-bold text-sm">{title}</h3>
        <span className="text-gray-600 text-sm">{status}</span>
      </div>
    </div>
  );
};
