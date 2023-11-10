import React, { useContext } from "react";
import { Mycontext } from "../Components/Context";

const AniProfile = () => {
  const context = useContext(Mycontext);
  const { Dark } = context;

  return (
    <div
      className={` h-fit  shadow-[0rem_0rem_1rem_-2px] rounded-xl shadow-gray-900   mx-auto pt-10 px-10 pb-20 mt-20 flex justify-center gap-20  items-center
      xl:w-1/2
      lg:w-4/6
      w-11/12
      sm:flex-row
      flex-col
      p-10
      font-Poppins1
   ${Dark ? "Dark3" : "Light2"}
      `}
    >
      <div
        className={`
          h-60 rounded-full overflow-hidden
          md:w-1/2
          w-full
          ${Dark ? "DarkLoader" : "Loader"}
          `}
      ></div>
      <div
        className=" h-60  text-xl flex flex-col justify-evenly
     md:w-1/2
     w-full
    "
      >
        <div
          className={` flex w-full h-10 rounded-xl
             ${Dark ? "DarkLoader" : "Loader"}
          `}
        ></div>
        <div
          className={` flex w-full h-10 rounded-xl
             ${Dark ? "DarkLoader" : "Loader"}
          `}
        ></div>
        <div
          className={` flex w-full h-10 rounded-xl
             ${Dark ? "DarkLoader" : "Loader"}
          `}
        ></div>
      </div>
    </div>
  );
};

export default AniProfile;
