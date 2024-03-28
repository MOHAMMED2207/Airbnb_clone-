"use client";

import React, { useState } from "react";
import MapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { getCenter } from "geolib";
import { SearshResulr, SearshResulrItems } from "./Type/app";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { format } from "date-fns";

type SearchParams = {
  location: string;
  startDate: string;
  endDate: string;
  numOfGuests: string;
};

const MapAppss = ({ searchResults }: { searchResults: SearshResulr }) => {
  const [selectedLocation, setSelectedLocation] =
    useState<SearshResulrItems | null>(null);

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  const center = getCenter(coordinates) as {
    longitude: number;
    latitude: number;
  };
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });
  return (
    <MapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/navigation-night-v1"
      mapboxAccessToken=" pk.eyJ1Ijoia2FyZWVtMjAwMnNoaW1lcyIsImEiOiJjbHIyNXRqdGgxMDd5MnB0M3NhcGU0dW00In0.AzOg6_5maKfFjnxNwExWhg"
      onMove={(nextViewport) =>
        setViewport((prev) => {
          return {
            ...prev,
            longitude: nextViewport.viewState.longitude,
            latitude: nextViewport.viewState.latitude,
          };
        })
      }
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker longitude={Number(result.long)} latitude={Number(result.lat)}>
            <div
              onClick={() => setSelectedLocation(result)}
              className=" animate-bounce"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7 text-red-600"
              >
                <path
                  fill-rule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clip-rule="evenodd"
                />
              </svg>{" "}
            </div>
          </Marker>
          {selectedLocation?.long === result.long ? (
            <Popup
              closeOnClick={false}
              onClose={() => setSelectedLocation(null)}
              longitude={Number(result.long)}
              latitude={Number(result.lat)}
              style={{ width: "100", fontSize: "30px" }}
            >
              <div className="w-full h-full  flex flex-col relative ">
                <Link
                  href={{
                    pathname: "../Posts",
                    search: `?id=${result.lat}`,
                  }}
                  className="border-none outline-none"
                >
                  <Image
                    src={result.img}
                    width={300}
                    height={300}
                    className="rounded-2xl object-cover mt-2 "
                    alt="Listing-Card"
                  />
                </Link>
                <div className="flex flex-col py-3 px-3 capitalize">
                  <h1 className="text-sm font-bold border-b-2 pb-2">
                    {result.location} /{" "}
                    <span className="text-green-600">{result.price}</span>
                  </h1>

                  <h1 className="text-xs font-bold py-2 opacity-65 ">
                    {result.description}
                  </h1>
                  <div className="flex flex-row w-full justify-between items-center pt-2">
                    <p className="flex items-center ">
                      <StarIcon className="h-6 w-5  text-orange-500" />
                      <h1 className="text-xs font-extrabold ">{result.star}</h1>
                    </p>

                    <h1 className="text-xs font-extrabold text-green-600">
                      {result.total}
                    </h1>
                  </div>
                </div>
              </div>
            </Popup>
          ) : null}
        </div>
      ))}
    </MapGL>
  );
};

export default MapAppss;
