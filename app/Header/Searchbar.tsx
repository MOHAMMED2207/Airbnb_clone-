"use client";

import React, { useState } from "react";
import { SearchIcon, UsersIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Searchbar = ({ placeholder }: { placeholder?: string }) => {
  const [search, setSearsh] = useState("");
  const [showmodel, setShowmodel] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [NumberGuest, setNumberGuest] = useState(1);
  const SeleactioRange = {
    startDate,
    endDate,
    key: "selection",
  };
  const HandelSeleact = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  };

  return (
    <>
      <div className="flex w-full items-center my-3  md:border-2 rounded-full shadow-md border-opacity-25 border-black border-solid border-2 py-2 ">
        <input
          value={search}
          onChange={(e) => setSearsh(e.target.value)}
          placeholder={placeholder || `Start your search`}
          type="text"
          className="text-sm text-gray-600 placeholder-gray-400  flex-grow bg-transparent pl-5 outline-none border-none"
        />
        <button onClick={() => setShowmodel(true)}>
          <SearchIcon
            className={`mx-3 md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2  ${
              showmodel && "pl-20"
            } hover:transition-all`}
          />
        </button>
      </div>
      {showmodel || search ? (
        <div className="absolute  w-full bg-black bg-opacity-50  h-screen top-[100%] left-[50%] flex flex-col   mx-auto translate-x-[-50%]">
          <div className=" absolute top-0 mr-auto left-[50%]  translate-x-[-50%] ">
            <DateRangePicker
              // showSelectionPreview={true}
              onChange={HandelSeleact}
              moveRangeOnFirstSelection={false}
              ranges={[SeleactioRange]}
              // لون التحديد علي حسب الاختيار
              rangeColors={["#FD5B61"]}
              //  مينفعش احجز بتاريخ قبل اليوم الي انا فيه
              minDate={new Date()}
            />

            <div className="flex items-center border-b bg-white p-4">
              <h2 className="text-2xl flex-grow font-semibold">
                Number of Guests
              </h2>
              <UsersIcon className="h-5" />
              <input
                type="number"
                value={NumberGuest}
                className="w-12 pl-2 text-lg outline-none text-red-400"
                min={1}
                onChange={(e) => setNumberGuest(Number(e.target.value))}
              />
            </div>
            <div className="flex items-center bg-white p-5 gap-3">
              <button
                type="button"
                onClick={() => {
                  setShowmodel(false);
                  setSearsh("");
                }}
                className="flex-grow bg-gray-50 transition-all py-1 hover:text-white hover:bg-red-600 rounded-md"
              >
                Cancel
              </button>
              {search && (
                <Link
                  href={{
                    pathname: "/Searsh",
                    search: `?location=${search}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numOfGuests=${NumberGuest}`,
                  }}
                  onClick={() => {
                    setShowmodel(false);
                    setSearsh("");
                  }}
                  className="flex-grow text-white py-1 bg-red-400 hover:bg-gray-50 hover:text-black transition-all text-center rounded-md "
                >
                  Search
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Searchbar;
