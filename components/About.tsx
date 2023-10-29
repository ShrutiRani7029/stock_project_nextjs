import React from "react"
import Price from "./Price"

const About = () => {
  return (
    <div className="h-full w-full pt-4 ">
      <div className=" h-full w-full  ">
        <h1 className="pl-7 mb-2 font-semibold">About GOOGL INC</h1>
        <div className="w-full h-[0.5px] bg-gray-500" />
        <div className="mt-6 px-7">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            eveniet id expedita tempore! Aliquid consequatur veritatis inventore
            a officia, doloribus voluptatum iste possimus quasi minima quos!
            Delectus sed laborum hic repellat, qui illum fugit. Earum est quae
            odio saepe quos itaque laudantium autem praesentium incidunt,
            commodi repellat, cupiditate, molestiae non qui illum soluta aliquam
            sequi nobis iure culpa? Enim nostrum sint illum expedita, deleniti
            nulla voluptatibus possimus necessitatibus ea ullam explicabo
            doloribus eos inventore id non dolorem aliquam. Perspiciatis nemo
            cupiditate magnam ex praesentium ratione quasi neque ullam ad
            explicabo dicta ea esse sapiente, sequi provident non deleniti
            quaerat quos! Lorem ipsum dolor, sit amet consectetur adipisicing
            elit.
          </p>
        </div>
        <div className="pl-7 mt-6 ">
          <div className="h-12 w-full flex  space-x-4 ">
            <h1 className="px-5  py-2 bg-[#edd4c6] flex items-center text-[#d8906a] font-semibold   rounded-full">
              Industry: Electronic Computers
            </h1>
            <h1 className="px-5 flex items-center  py-2 bg-[#edd4c6] text-[#d8906a] font-semibold   rounded-full">
              Sector: Tecnology
            </h1>
          </div>
        </div>
        <div className="pl-7 mt-6">
          <Price />
        </div>
        <div className="pl-14 mt-6 grid grid-cols-5">
          <div>
            <h1 className="text-gray-500">Market Cap</h1>
            <p className="font-bold">$2.77T</p>
          </div>
          <div>
            <h1 className="text-gray-500">P/E Ratio</h1>
            <p className="font-bold">27.77</p>
          </div>
          <div>
            <h1 className="text-gray-500">Beta</h1>
            <p className="font-bold">1.308</p>
          </div>
          <div>
            <h1 className="text-gray-500">Dividend Yield</h1>
            <p className="font-bold">0.54%</p>
          </div>
          <div>
            <h1 className="text-gray-500">Profit Margin</h1>
            <p className="font-bold">0.247</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
