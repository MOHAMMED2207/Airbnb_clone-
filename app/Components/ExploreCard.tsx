import Image from "next/image";
import { ExploreItems } from "./Type/app";

type ExploreCardProps = ExploreItems;
const ExploreCard = ({ location, distance, img }: ExploreCardProps) => {
  return (
    <div className="flex items-center m-2 mt-5 rounded-lg space-x-4 cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative w-16 h-16 ">
        <Image src={img} alt="ExploreCard-Img" fill className="rounded-lg brightness-95" />
      </div>
      <div>
        <h2 className="font-medium">{location}</h2>
        <h3 className="text-gray-500 ">{distance}</h3>
      </div>
    </div>
  );
};

export default ExploreCard;
