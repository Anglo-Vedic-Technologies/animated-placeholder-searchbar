import clsx from "clsx";
import { useState } from "react";

export default function Searchbar() {
  const [search, setSearch] = useState("");

  return (
    <div
      className={`w-80 p-2 bg-fills-tertiary/12 rounded-apple text-labels-secondary/60 flex items-center gap-x-2
        [&:focus-within>div>label]:hidden ${clsx(
          search && "[&>div>label]:hidden w-96 md:w-[550px]"
        )} [&:focus-within]:w-96 md:[&:focus-within]:w-[550px]  transition-all`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      <div className="grow self-stretch relative flex items-center gap-x-1">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent w-full focus:outline-none text-black"
          id="search"
        />
        <label
          className="absolute w-full h-full top-0 left-0 overflow-hidden cursor-text"
          htmlFor="search"
        >
          <div className="absolute top-full motion-safe:animate-search">
            Search &quot;bread&quot;
          </div>
          <div className="absolute top-full motion-safe:animate-search-delay-1">
            Search &quot;milk&quot;
          </div>
          <div className="absolute top-full motion-safe:animate-search-delay-2">
            Search &quot;eggs&quot;
          </div>
          <div className="absolute top-full motion-safe:animate-search-delay-3">
            Search &quot;avocado&quot;
          </div>
        </label>
      </div>
    </div>
  );
}
