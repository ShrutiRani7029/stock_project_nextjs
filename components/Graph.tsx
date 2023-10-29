import React from "react"
import Timeline from "./Timeline"

const Graph = () => {
  return (
    <div className="h-full w-full p-10 relative">
      <div className="w-full h-64 flex  space-x-2 relative">
        <div className="flex flex-col justify-end space-y-10 text-gray-400  ">
          <p>$180</p>
          <p>$179</p>
          <p>$177</p>
          <p>$175</p>
        </div>
        <div className="h-64 w-[0.5px] bg-gray-500" />
        <div className="relative">
          <div className=" md:h-[65rem] md:-top-[16.5rem] md:left-[32rem]  w-[0.5px] bg-gray-500 rotate-90 absolute -right-[19.5rem] -top-16 " />
          <div className="absolute -bottom-7 left-4 text-gray-400 flex space-x-10 md:space-x-16">
            <p>09:30Am</p>
            <p>10:30Am</p>
            <p>11:30Am</p>
            <p>12:30Am</p>
            <p>13:30Am</p>
            <p>14:30Am</p>
            <p>15:30Am</p>
          </div>
        </div>
      </div>
      <div>
        <Timeline />
      </div>
    </div>
  )
}

export default Graph
