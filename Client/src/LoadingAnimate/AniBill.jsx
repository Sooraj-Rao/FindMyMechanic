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
              className={`w-full flex justify-around h-fit my-8 px-6 pt-10 pb-8
      lg:flex-row
        flex-col
       gap-4
       text-white
       rounded-xl
       font-Poppins1
       ${Dark ? " bg-gray-900" : "Light2"}
      `}
              key={i}
            >
              {
                Array(5).fill('').map((item, i) => {
                  return (
                    <div key={i} className={` h-8 w-32 rounded-md ${Dark ? 'DarkLoader' : 'Loader'}`}>
                    </div>
                  )
                })
              }
            </div>
          );
        })}
    </>
  );
};

export default AniBill;
