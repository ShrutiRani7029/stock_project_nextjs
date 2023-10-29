import Link from "next/link"
import React from "react"
import { MdPlayArrow } from "react-icons/md"
const StockContainer = ({ img, title, price, value, key }: any) => {
  return (
    <Link href="/productid" key={key}>
      <div className="mt-10 w-full h-full cursor-pointer ">
        <div className="w-52 h-56 border-2 shadow-sm rounded-lg px-3 py-3">
          <div className="w-14 h-14 p-1 border-2 border-gray-300  flex flex-col rounded-full ">
            <img src={`/${img}`} alt="logo" />
          </div>

          <h1 className="mt-3 font-semibold">{title}</h1>

          <div className="mt-5 ">
            <p className="text-gray-600">{price}</p>
            <div className="flex text-green-600 items-end ">
              <p>{value}</p>
              <div className="-rotate-90  ">
                <MdPlayArrow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default StockContainer
