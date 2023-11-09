import React, { useContext } from "react";
import { Mycontext } from "../Components/Context";

const AniBill = () => {
  const context = useContext(Mycontext);
  const { Dark } = context;

  return (
    <>
      {Array(2)
        .fill("")
        .map((item, i) => {
          return (
            <div
              className={`w-full flex justify-around h-28 my-3 px-6 py-8
          lg:flex-row
            flex-col
           gap-4
           text-white
           rounded-xl
           font-Poppins1
           ${Dark ? "DarkLoader" : "Loader"}
          `}
              key={i}
            ></div>
          );
        })}
    </>
  );
};

export default AniBill;
