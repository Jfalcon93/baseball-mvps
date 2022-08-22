import { useState, useEffect } from "react";
import TopMarquee from "../components/topMarquee";
import BottomMarquee from "../components/bottomMarquee";
import { Tooltip } from "../components/tooltip";
import { BattingStats } from "../components/battingStats";
import { PitchingStats } from "../components/pitchingStats";
import Image from "next/image";

export default function Home() {
  const [data, setData] = useState([]);
  const [year, setYear] = useState("");

  const submitYear = async (event) => {
    event.preventDefault();
    let mounted = true;
    const res = await fetch(`/api/mvp/${event.target.year.value}`);
    const result = await res.json();
    setYear(event.target.year.value);
    setData(result);
    event.target.year.value = "";
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <TopMarquee />
      {data.length > 1 ? (
        <div className="md:mx-8 mx-4 my-2">
          <form className="flex" onSubmit={submitYear}>
            <div className="flex flex-row w-64">
              <input
                className="border rounded-lg w-32 text-center bg-black border-gray-300 transition duration-300 text-white text-xl focus:ring-0 focus:outline-none focus:border-blue-500 focus:border block w-full p-1.5"
                type="number"
                min="1911"
                max="2021"
                placeholder="enter year"
                id="year"
                name="year"
              />
              <button
                className="p-1.5 border w-32 rounded-lg ml-4 border-gray-300 transition duration-300 hover:text-blue-500 hover:border-blue-500"
                type="submit"
              >
                search
              </button>
            </div>
          </form>
          <div className="flex flex-col">
            <div className="mt-12 md:mt-16">
              <h1 className="text-4xl pb-1 font-light text-blue-500">
                {data[0].league}
              </h1>
              <div className="flex flex-row pb-4">
                <h2 className="text-4xl font-light">
                  <a
                    className="hover:text-blue-500 md:no-underline underline decoration-2 underline-offset-4 decoration-blue-500"
                    href={data[0].profile}
                  >
                    {data[0].name}
                  </a>
                </h2>
                <h3 className="ml-4 text-xl font-light self-end">
                  {data[0].team}
                </h3>
                <h3 className="ml-4 text-xl font-medium self-end">
                  {data[0].war}
                </h3>
              </div>
              <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
                {data[0].battingAverage ? <BattingStats data={data[0]} /> : ""}
                {data[0].wins ? <PitchingStats data={data[0]} /> : ""}
              </div>
            </div>
            <div className="mt-12 md:mt-16 mb-12 md:mb-0">
              <h1 className="text-4xl pb-1 font-light text-red-500">
                {data[1].league}
              </h1>
              <div className="flex flex-row pb-4">
                <h2 className="text-4xl font-light">
                  <a
                    className="hover:text-red-500 md:no-underline underline decoration-2 underline-offset-4 decoration-red-500"
                    href={data[1].profile}
                  >
                    {data[1].name}
                  </a>
                </h2>
                <h3 className="ml-4 text-xl font-light self-end">
                  {data[1].team}
                </h3>
                <h3 className="ml-4 text-xl font-medium self-end">
                  {data[1].war}
                </h3>
              </div>
              <div className="flex flex-row space-x-16">
                {data[1].battingAverage ? <BattingStats data={data[1]} /> : ""}
                {data[1].wins ? <PitchingStats data={data[1]} /> : ""}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <form className="flex grow" onSubmit={submitYear}>
          <div className="flex flex-col content-center w-64 m-auto">
            <input
              className="border rounded-lg text-center bg-black border-gray-300 transition duration-300 text-white text-5xl focus:ring-0 focus:outline-none focus:border-blue-500 focus:border block w-full p-2.5"
              type="number"
              min="1911"
              max="2021"
              placeholder="enter year"
              id="year"
              name="year"
            />
            <button
              className="p-1.5 mt-4 md:hidden self-center border-gray-300 transition duration-300 hover:text-blue-500"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      )}
      <BottomMarquee />
    </div>
  );
}
