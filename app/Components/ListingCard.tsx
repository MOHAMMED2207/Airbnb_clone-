import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Link from "next/link";
type SearshResulrItemss = {
  location: string;
  title: string;
  description: string;
  star: string;
  price: string;
  total: string;
  img: string;
  lat: string;
  startDate: string;
  endDate: string;
  locationCity: string;
  numOfGuests: string;
};
const ListingCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  lat,
  startDate,
  endDate,
  numOfGuests,
  locationCity,
}: SearshResulrItemss) => {
  return (
    <Link
      href={{
        pathname: "../Posts",
        search: `?location=${locationCity}&startDate=${startDate.toString()}&endDate=${endDate.toString()}&numOfGuests=${numOfGuests}&id=${lat}`,
      }}
    >
      <div className="flex flex-col lg:flex-row md:flex-row py-3 px-2  sm:p-0 border-b cursor-pointer pr-4 rounded-md hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
        <div className="relative sm:my-4 w-full h-52  lg:h-52 lg:w-80 md:h-52 md:w-80 flex-shrink-0">
          <Image
            src={img}
            fill
            className="rounded-2xl  object-cover "
            alt="Listing-Card"
          />
        </div>
        <div className="flex flex-col flex-grow pl-5 py-4">
          <div className="flex justify-between">
            <p>{location}</p>
            <HeartIcon className="h-7 cursor-pointer text-red-700" />
          </div>
          <h4 className="text-xl">{title}</h4>
          <div className="border-b w-10 pt-2" />
          <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
          <div className="flex justify-between items-end sm:items-center pt-5">
            <p className="flex items-center">
              <StarIcon className="h-5 text-red-400" />
              {star}
            </p>
            <div>
              <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
              <p className="text-right font-extralight ">{total}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
