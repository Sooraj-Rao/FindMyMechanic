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
            <>
              <div
                className={` w-full   p-4 mx-auto 
          sm:my-4 
          my-1
          rounded-lg
          xl:h-20
          h-72
          ${Dark ? "DarkLoader" : "Loader"}
          `}
                key={i}
              ></div>
            </>
          );
        })}
    </>
  );
};

export default AniNotification;
