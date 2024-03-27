import React from "react";
import { getSearchResult } from "../utils/api";
import { SearshResulr } from "../Components/Type/app";
import MapAppss from "../Components/MapAppss";
import Header from "../Header/Header";
import Footer from "../Components/Footer";
import { HeartIcon, StarIcon, UsersIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";

type SearchParams = {
  location: string;
  startDate: string;
  endDate: string;
  numOfGuests: string;
  id: string;
};
const Post = async ({
  searchParams: { location, startDate, endDate, numOfGuests, id },
}: {
  searchParams: SearchParams;
}) => {
  const searshresult: SearshResulr = await getSearchResult();
  const DataAfterFilter = searshresult.filter((res) => res.lat == id);

  let formatStart;
  let formatEnd;

  if (startDate && endDate) {
    formatStart = format(new Date(startDate), " yyyy-MM-dd");
    formatEnd = format(new Date(endDate), " yyyy-MM-dd");
  }
  const range = `${formatStart}-${formatEnd}`;
  const filters = [
    "Cancellation Flexibility",
    "Type of Place",
    "Price",
    "Rooms and Beds",
    "More filters",
  ];
  return (
    <>
      <Header
        placeholder={
          location ? `${location} | ${range} | ${numOfGuests} Guests  ` : ""
        }
      />
      <Link
        href={{
          pathname: "/Searsh",
          search: `?location=cairo&startDate=2024-03-27T20%3A13%3A54.681Z&endDate=2024-03-27T20%3A13%3A54.681Z&numOfGuests=1`,
        }}
        className="bg-red-500 p-2 rounded-full ml-8 mt-3  hover:shadow-lg  hover:bg-black transition-all top[100%] absolute"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6  text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
          />
        </svg>
      </Link>

      <main>
        <section>
          <div className="w-full flex">
            <div className="w-full pt-14 pr-4 pl-20">
              {location && (
                <>
                  <p className="text-xs">
                    300+ Stays - {range} - for {numOfGuests} guests
                  </p>
                  <h1 className="text-3xl font-semibold mt-2 mb-6 ">
                    Stays in {location}
                  </h1>
                  <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                    {filters.map((filter) => (
                      <button type="button" className="filter-btn" key={filter}>
                        {filter}
                      </button>
                    ))}
                  </div>
                </>
              )}
              <div>
                {DataAfterFilter.map((result, inx) => (
                  <>
                    <div className="flex h-full w-full flex-col   hover:shadow-lg transition">
                      <div className="relative h-80 w-full ">
                        <Image
                          src={result.img}
                          className="rounded-2xl object-cover brightness-90"
                          alt="Listing-Card"
                          fill
                        />
                      </div>
                      <div
                        key={inx}
                        className="flex relative py-3 px-2 border-b cursor-pointer pr-4 rounded-md hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t"
                      >
                        <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                          <Image
                            src={result.img}
                            fill
                            className="rounded-2xl object-cover"
                            alt="Listing-Card"
                          />
                        </div>
                        <div className="flex flex-col flex-grow pl-5">
                          <div className="flex justify-between">
                            <p>{result.location}</p>
                            <HeartIcon className="h-7 cursor-pointer text-red-700" />
                          </div>
                          <h4 className="text-xl">{result.title}</h4>
                          <div className="border-b w-10 pt-2" />
                          <p className="pt-2 text-sm text-gray-500 flex-grow">
                            {result.description}
                          </p>
                          <div className="flex justify-between items-end pt-5">
                            <p className="flex items-center">
                              <StarIcon className="h-5 text-red-400" />
                              {result.star}
                            </p>
                            <div>
                              <p className="text-lg lg:text-2xl font-semibold pb-2">
                                {result.price}
                              </p>
                              <p className="text-right font-extralight ">
                                {result.total}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="hidden xl:inline-flex xl:min-w-[600px] h-screen">
              <MapAppss searchResults={searshresult} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Post;
