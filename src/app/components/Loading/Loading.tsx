import Image from "next/image";
import Ricky from "../../../assets/ricky.png";
import Morty from "../../../assets/morty.png";

export const Loading: React.FC = () => {
  function randomNumbers(numero1: number, numero2: number): number {
    const randomIndex = Math.round(Math.random());

    return randomIndex === 0 ? numero1 : numero2;
  }

  const img = () => {
    const randomicNumber = randomNumbers(1, 2);

    if (randomicNumber === 1) return Ricky;
    if (randomicNumber === 2) return Morty;

    return Morty;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-spin">
        <Image
          src={img()}
          alt="Rick and Morty Loading"
          width="100"
          height="100"
        />
      </div>
      <div className="ml-4 text-xl text-gray-800">Loading...</div>
    </div>
  );
};
