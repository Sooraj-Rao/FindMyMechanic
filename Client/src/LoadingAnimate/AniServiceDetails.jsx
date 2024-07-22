import React, { useContext } from "react";
import { Mycontext } from "../Components/Context";

const AniServiceDetails = () => {
  const context = useContext(Mycontext);
  const { Dark } = context;

  return (
    <div className={`${Dark ? "Dark2" : " bg-white/10"}`}>
      <div className=" h-fit pb-32">
        {Array(3).fill('').map((item, i) => {
          return (
            <div
              className={`   rounded-xl h-fit  mx-auto mt-10
            xl:w-4/5
            sm:w-2/3
            w-11/12
            xl:py-9
            py-3
            ${Dark ? " bg-gray-900" : " bg-white"}
            `}
              key={i}
            >
              <div>
                <div
                  className={` flex justify-around
                xl:flex-row
                flex-col
                font-Poppins1
                xl:gap-0
                gap-5
                sm:items-center
                sm:ml-0
                ml-4
                pt-1 
                `}
                >
                  {
                    Array(4).fill('').map((itm, a) => {
                      return (
                        <div key={a} className={` h-7 w-28 rounded-md ${Dark ? 'DarkLoader' : 'Loader'}`}>
                        </div>
                      )
                    })
                  }

                  <div className=" flex gap-2">
                    <div className={`
                     h-9 w-20 rounded-md px-3 py-1 
                     ${Dark ? 'DarkLoader' : 'Loader'}
                     `}
                    >
                    </div>
                    <div className={` h-9 w-20 rounded-md px-3 py-1  
                                        ${Dark ? 'DarkLoader' : 'Loader'}
                    `}>
                    </div>
                  </div>
                  <div className={` h-7 w-36 rounded-md 
                    ${Dark ? 'DarkLoader' : 'Loader'}
                    
                    `}>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AniServiceDetails;
