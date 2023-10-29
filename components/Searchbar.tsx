"use client"
import React, { useEffect, useState } from "react"

const Searchbar = () => {
  const [active, setActive] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/users")
      const resp = await data.json()
      console.log(resp)
      setData(resp)
    }
    fetchData()
  }, [])

  return (
    <form className="w-[300px] relative md:w-[500px]">
      <div className="relative ">
        <input
          name="search"
          type="search"
          onChange={(e) => {
            setActive(true)
          }}
          placeholder="Type Here"
          className={`w-full p-3 ${
            active ? "rounded-t-2xl" : "rounded-full"
          }  bg-[#87492b] px-14  `}
        />
        <button className="absolute left-4 py-3 px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      {active && (
        <div className="absolute w-full bg-[#87492b] h-64 px-3 rounded-b-2xl border-t-[1px]">
          {data.map((item, i) => (
            <h1 key={i}>Apple</h1>
          ))}
        </div>
      )}
    </form>
  )
}

export default Searchbar
