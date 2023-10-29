import React from "react"

const Timeline = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="w-72 h-12  rounded-3xl border border-gray-500 px-2 ">
        <div className="flex space-x-5 justify-center items-center h-full font-semibold cursor-pointer ">
          <h1 className="w-9 h-9 text-white rounded-full bg-[#ab643e] flex items-center justify-center ">
            1D
          </h1>
          <h1>1W</h1>
          <h1>1M</h1>
          <h1>3M</h1>
          <h1>6M</h1>
          <h1>1Y</h1>
        </div>
      </div>
    </div>
  )
}

export default Timeline
