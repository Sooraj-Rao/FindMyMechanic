import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Animate1 } from "../Framer/Framer";
import { Animate2 } from "../Framer/Framer";
import { Animate3 } from "../Framer/Framer";
import { Animate4 } from "../Framer/Framer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {Mycontext} from '../Components/Context'


const ChooseVehicle = () => {
  const [shopsList, setshopsList] = useState([
    {
      vehicle: "Car",
    },
    {
      vehicle: "Truck",
    },
    {
      vehicle: "2_Wheeler",
    },
  ]);

  
  const context = useContext(Mycontext);
  const { Dark, setDark } = context;

  const serviceId = localStorage.getItem("serviceId");

  const navigate = useNavigate();

 
const vehicle=(vehicle)=>{
    let shop= JSON.parse(localStorage.getItem('Service'))
    let shopvehicle={shopId:shop.shopId,vehicle:vehicle}
    localStorage.setItem('Service',JSON.stringify(shopvehicle))
    navigate('/service')
}

  return (
    <motion.div
      initial={"Offscreen"}
      whileInView={"onScreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.1 }}
      className={` flex gap-10 font-Poppins1 flex-wrap flex-grow justify-center py-32 
      ${Dark?'Dark3':'Light3'}
      `}
    >
      {shopsList.map((item, index) => {
        return (
          <div className=" h-[27rem] bg-slate-800  rounded-lg overflow-hidden cursor-pointer hover:bg-gray-800 
          sm:w-[20rem]
          w-[17.3rem]
          mx-3
          text-white
          " key={index}  onClick={()=>vehicle(item.vehicle)}>
            <div className=" h-5/6 hover:scale-x-105 duration-100 ">
              <img src="../../img2.jpg" className=" h-full" />
            </div>
            <div className=" text-2xl pt-4 text-center">
              <h1>{item.vehicle==='2_Wheeler'?'2 Wheeler':item.vehicle}</h1>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default ChooseVehicle;
