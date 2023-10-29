import About from "@/components/About"
import Graph from "@/components/Graph"
import Timeline from "@/components/Timeline"
import React from "react"
import { MdPlayArrow } from "react-icons/md"
const page = () => {
  return (
    <div className="h-full w-full max-w-7xl px-14 mx-auto mt-12">
      <div className="flex justify-between items-center ">
        <div className="flex items-center space-x-7">
          <div className="w-28 h-28 border-2 border-gray-300 rounded-full flex  justify-center items-center ">
            <img src="/Google.svg" alt="" className="w-24 h-24" />
          </div>
          <div>
            <h1 className="font-bold">ALPHABET INC</h1>
            <p className="">GOOGL, Common Stock</p>
            <p>NSQ</p>
          </div>
        </div>

        <div className="flex flex-col space-y-1 ">
          <p className="text-gray-600 font-semibold">$139.72</p>
          <div className="flex  items-end">
            <p className="text-green-600">+0.45%</p>
            <div className="pb-1">
              <div className="-rotate-90 text-green-600  ">
                <MdPlayArrow />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 w-full  h-[30rem] border-2 border-gray-400 rounded-md ">
        <Graph />
      </div>
      <div className="mt-12 w-full  h-[34rem] border-2 border-gray-400 rounded-md mb-2 ">
        <About />
      </div>
    </div>
  )
}

export default page
{
  /*  */
}
