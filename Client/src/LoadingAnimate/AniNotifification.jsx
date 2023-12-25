import React, { useContext } from "react";
import { Mycontext } from "../Components/Context";

const AniNotification = () => {
  const context = useContext(Mycontext);
  const { Dark } = context;

  return (
    <>
      {Array(2)
        .fill("")
        .map((item, i) => {
          return (
            <div key={i}>
              <div
                className={` w-full h-28   p-4 mx-auto 
                sm:my-4
                py-2 
                my-4
                rounded-xl
                ${Dark ? " bg-gray-900" : "Light2"}
                `}
              >
                <h1 className={` h-6 w-1/2 my-2 rounded-md
                 ${Dark ? 'DarkLoader' : 'Loader'}
                 `}></h1>
                <p className={` h-10 w-full my-3 rounded-md   ${Dark ? 'DarkLoader' : 'Loader'}`}></p>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default AniNotification;
