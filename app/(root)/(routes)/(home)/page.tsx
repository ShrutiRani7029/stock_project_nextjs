import StockContainer from "@/components/StockContainer"
import React from "react"

const data = [
  {
    name: "Alphabet Inc. - Class A Shares (GOOGL)",
    img: "Google.svg",
    price: "$172.47",
    value: "92.12",
  },
  {
    name: "Apple, Inc. (AAPL)",
    img: "apple.svg",
    price: "$172.47",
    value: "92.12",
  },
  {
    name: "Microsoft Corporation (MSFT)",
    img: "Microsoft.svg",
    price: "$172.47",
    value: "92.12",
  },
  {
    name: "Meta Platform Inc. (META)",
    img: "meta.svg",
    price: "$172.47",
    value: "92.12",
  },
  {
    name: "Thread Inc. (THREAD)",
    img: "threads.svg",
    price: "$172.47",
    value: "92.12",
  },
  {
    name: "Alphabet Inc. - Class A Shares (GOOGL)",
    img: "Google.svg",
    price: "$172.47",
    value: "92.12",
  },
  {
    name: "Apple, Inc. (AAPL)",
    img: "apple.svg",
    price: "$172.47",
    value: "92.12",
  },
  {
    name: "Microsoft Corporation (MSFT)",
    img: "Microsoft.svg",
    price: "$172.47",
    value: "92.12",
  },
  {
    name: "Meta Platform Inc. (META)",
    img: "meta.svg",
    price: "$172.47",
    value: "92.12",
  },
  {
    name: "Thread Inc. (THREAD)",
    img: "threads.svg",
    price: "$172.47",
    value: "92.12",
  },
  {
    name: "Alphabet Inc. - Class A Shares (GOOGL)",
    img: "Google.svg",
    price: "$172.47",
    value: "92.12",
  },
  {
    name: "Apple, Inc. (AAPL)",
    img: "apple.svg",
    price: "$172.47",
    value: "92.12",
  },
  {
    name: "Microsoft Corporation (MSFT)",
    img: "Microsoft.svg",
    price: "$172.47",
    value: "92.12",
  },
  {
    name: "Meta Platform Inc. (META)",
    img: "meta.svg",
    price: "$172.47",
    value: "92.12",
  },
  {
    name: "Thread Inc. (THREAD)",
    img: "threads.svg",
    price: "$172.47",
    value: "92.12",
  },
  {
    name: "Alphabet Inc. - Class A Shares (GOOGL)",
    img: "Google.svg",
    price: "$172.47",
    value: "92.12",
  },
  {
    name: "Apple, Inc. (AAPL)",
    img: "apple.svg",
    price: "$172.47",
    value: "92.12",
  },
  {
    name: "Microsoft Corporation (MSFT)",
    img: "Microsoft.svg",
    price: "$172.47",
    value: "92.12",
  },
  {
    name: "Meta Platform Inc. (META)",
    img: "meta.svg",
    price: "$172.47",
    value: "92.12",
  },
  {
    name: "Thread Inc. (THREAD)",
    img: "threads.svg",
    price: "$172.47",
    value: "92.12",
  },
  {
    name: "Alphabet Inc. - Class A Shares (GOOGL)",
    img: "Google.svg",
    price: "$172.47",
    value: "92.12",
  },
]

const HomePage = () => {
  return (
    <div className="h-screen max-w-7xl mx-auto px-14 mt-12 ">
      <div className="h-full w-full ">
        <div className="flex space-x-5 font-semibold text-gray-500">
          <h1>Top Gainers</h1>
          <h1>Top Lossers</h1>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 grid-cols-2 ">
          {data.map((item, index) => (
            <StockContainer
              title={item.name}
              img={item.img}
              price={item.price}
              value={item.value}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
