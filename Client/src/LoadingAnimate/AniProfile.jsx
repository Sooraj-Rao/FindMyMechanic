import React, { useContext } from "react";
import { Mycontext } from "../Components/Context";

const AniProfile = () => {
  const context = useContext(Mycontext);
  const { Dark } = context;

  return (
    <div
      className={` h-fit   rounded-xl    mx-auto pt-10 px-10 pb-20 mt-20 flex justify-center gap-20  items-center
  xl:w-1/2
  lg:w-4/6
  w-11/12
  md:flex-row
  flex-col
  p-10
  shadow-[0rem_0rem_1rem_-4px] 
${Dark ? "Dark3" : "Light2"}
${!Dark ? "shadow-blue-950" : " shadow-gray-700"}
  `}

    >
      <div
        className={`  rounded-full overflow-hidden
        xl:w-[20vw]
        xl:h-[20vw]
       lg:w-[22vw]
       lg:h-[22vw]
       md:w-[28vw]
       md:h-[28vw]
       sm:w-[40vw]
       sm:h-[40vw]
        w-[70vw]
        h-[70vw]
        ${Dark ? 'DarkLoader' : 'Loader'}
        `}
      >
      </div>
      <div
        className=" h-60  text-xl flex flex-col justify-evenly
 md:w-1/2
 w-full
"
      >
        <div className=" flex">
          <h1 className={` h-7 w-full rounded-md ${Dark ? 'DarkLoader' : 'Loader'}`}> </h1>
        </div>
        <div className=" flex ">
          <h1 className={` h-7 w-full rounded-md ${Dark ? 'DarkLoader' : 'Loader'}`}> </h1>
        </div>
        <div className=" flex">
          <h1 className={` h-7 w-full rounded-md ${Dark ? 'DarkLoader' : 'Loader'}`}> </h1>
        </div>
      </div>
    </div>
  );
};

export default AniProfile;
