import React from "react"
import { MdPlayArrow } from "react-icons/md"
const Price = () => {
  return (
    <div className="flex justify-between h-20 w-full  items-center px-7">
      <div className="space-y-1">
        <p className="text-gray-500">52-Week Low</p>
        <p className="font-bold">$123.64</p>
      </div>
      <div>
        <div className="w-[4px] h-[15rem] md:h-[30rem] lg:h-[50rem] bg-gray-500 rotate-90  -bottom-20" />
      </div>
      <div className="space-y-1">
        <p className="text-gray-500">52-Week Low</p>
        <p className="font-bold">$123.64</p>
      </div>
    </div>
  )
}

export default Price
