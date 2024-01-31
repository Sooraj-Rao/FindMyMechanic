import React, { useContext } from "react";
import { Mycontext } from "../Components/Context";

const AniShop = ({ num }) => {
  const context = useContext(Mycontext);
  const { Dark } = context;

  return (
    <div className=" flex justify-center  w-full gap-x-10">
      {Array(num)
        .fill("")
        .map((item, index) => {
          return (
            <div
              className={`h-[27rem]  rounded-lg overflow-hidden cursor-pointer 
          sm:w-[20rem]
          w-[17.3rem]
          mx-3
          ${Dark ? 'DarkLoader' : 'Loader'}
          `}
              key={index}
            >
              <div className=" h-5/6 overflow-hidden group ">
              </div>
              <div className=" text-2xl pt-4 text-center h-1/6 bg-blue-900">
                <h1>
                </h1>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AniShop;
