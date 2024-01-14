import React, { useContext } from "react";
import { Mycontext } from "../Components/Context";

const AniShop = ({num}) => {
  const context = useContext(Mycontext);
  const { Dark } = context;

  return (
    <>
      {Array(num)
        .fill("")
        .map((item, index) => {
          return (
            <div
              className={` h-[30rem] bg-slate-800  rounded-lg
          md:w-[20rem]
          w-[17rem]
          mx-3 
          ${Dark ? "DarkLoader" : "Loader"}
          `}
              key={index}
            ></div>
          );
        })}
    </>
  );
};

export default AniShop;
