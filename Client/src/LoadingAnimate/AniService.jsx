import React, { useContext } from 'react'
import { Mycontext } from '../Components/Context'

const AniService = () => {
    const { Dark } = useContext(Mycontext);
    return (
        <div>
            {
                Array(2).fill('').map((item, i) => {
                    return (
                        <div
                            className={`h-[20rem]  rounded-lg 
            sm:w-full 
            w-[18rem]
            p-4 flex
            my-3
            ${Dark ? " bg-gray-900" : "Light"}
          `}
                            key={i}
                        >
                            <div className={` mx-6 h-full min-w-[20rem] overflow-hidden   rounded-md        ${Dark ? "DarkLoader" : "Loader"} `}>
                            </div>
                            <div className=" relative w-full">
                                <div className=" pt-4 text-center flex justify-around" >
                               {
                                Array(3).fill('').map((item,i)=>{
                                    return(
                                        <h1 key={i} className={`h-10 w-32 rounded-md     ${Dark ? "DarkLoader" : "Loader"}`}></h1>
                                    )
                                })
                               }
                                </div>
                                <h1 className={`    w-full h-20 mt-10   ${Dark ? "DarkLoader" : "Loader"}`}>
                                </h1>
                                <h1 className={`mt-10 text-justify  absolute bottom-0  h-6 w-80      ${Dark ? "DarkLoader" : "Loader"}`}>

                                </h1>
                                <h2 className=" absolute bottom-0  w-1/3"></h2>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AniService