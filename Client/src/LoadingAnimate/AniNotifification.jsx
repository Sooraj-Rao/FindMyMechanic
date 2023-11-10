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
                className={` w-full   p-4 mx-auto 
          my-4
          rounded-lg
          xl:h-32
          h-40
          ${Dark ? "DarkLoader" : "Loader"}
          `}
              ></div>
            </div>
          );
        })}
    </>
  );
};

export default AniNotification;
