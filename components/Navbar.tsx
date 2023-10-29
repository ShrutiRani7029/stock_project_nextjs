import React from "react"
import Searchbar from "./Searchbar"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="h-16 w-full bg-[#ab643e] text-white ">
      <div className=" h-full max-w-7xl mx-auto flex justify-between px-14 items-center">
        <div className="flex gap-1">
          <Link href="/">
            <h1>GrowwStonks</h1>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 -rotate-12"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
            />
          </svg>
        </div>
        <div>
          <Searchbar />
        </div>
      </div>
    </div>
  )
}

export default Navbar
