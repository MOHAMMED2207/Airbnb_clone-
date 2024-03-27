import React from "react";
import Header from "../Header/Header";
import Footer from "../Components/Footer";
import { format } from "date-fns";
import { getSearchResult } from "../utils/api";
import { SearshResulr } from "../Components/Type/app";
import ListingCard from "../Components/ListingCard";
import MapAppss from "../Components/MapAppss";

type SearchParams = {
  location: string;
  startDate: string;
  endDate: string;
  numOfGuests: string;
};
const Searsh = async ({
  searchParams: { location, startDate, endDate, numOfGuests },
}: {
  searchParams: SearchParams;
}) => {
  let formatStart;
  let formatEnd;
  let locationCity = location;

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

  const searshresult: SearshResulr = await getSearchResult();

  return (
    <>
      <Header placeholder={`${location} | ${range} | ${numOfGuests} Guests`} />
      <main>
        <section>
          <div className="w-full flex">
            <div className="w-full pt-14 pr-4 pl-20">
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
              <div>
                {searshresult.map(
                  ({
                    img,
                    location,
                    description,
                    price,
                    total,
                    star,
                    title,
                    lat,
                  }) => (
                    <ListingCard
                      key={img}
                      img={img}
                      location={location}
                      locationCity={locationCity}
                      description={description}
                      star={star}
                      price={price}
                      total={total}
                      title={title}
                      lat={lat}
                      startDate={startDate}
                      endDate={endDate}
                      numOfGuests={numOfGuests}
                    />
                  )
                )}
              </div>
            </div>
            <div className="hidden xl:inline-flex xl:min-w-[600px]">
              <MapAppss searchResults={searshresult} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Searsh;
