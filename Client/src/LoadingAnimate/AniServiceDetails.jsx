import React, { useContext } from "react";
import { Mycontext } from "../Components/Context";

const AniServiceDetails = () => {
  const context = useContext(Mycontext);
  const { Dark } = context;

  return (
    <div className={`${Dark ? "Dark2" : "Light4"}`}>
      <div className=" h-fit pb-32 mt-10">
        {Array(3)
          .fill("")
          .map((item, i) => {
            return (
              <div
                className={`  bg-slate-900  rounded-xl  mx-auto mt-10
            xl:w-4/5
            sm:w-2/3
            w-11/12
            xl:py-10
            py-3
            xl:h-32
            h-72
            ${Dark ? "DarkLoader" : "Loader"}
            `}
                key={i}
              >
                <div>
                  <div
                    className={`  mt-5 flex justify-around
                 xl:flex-row
                flex-col
                xl:text-lg
                sm:text-xl
                text-lg
               font-Poppins1
                xl:gap-0
                gap-5
                sm:items-center
                sm:ml-0
                pl-5
                ${!Dark ? " text-black" : " text-white"}
                `}
                  ></div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AniServiceDetails;
