import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Animate1 } from "../Framer/Framer";
import { Animate2 } from "../Framer/Framer";
import { Animate3 } from "../Framer/Framer";
import { Animate4 } from "../Framer/Framer";
import { Link, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { Mycontext } from "../Components/Context";
import AniShop from "../LoadingAnimate/AniShop";
import ScrollTo from "../Components/ScrollTo";

const ChooseVehicle = () => {
  const [Search, SetSearch] = useSearchParams();
  const location = useLocation();
  const [load, setload] = useState(true);
  const queryParams = new URLSearchParams(location.search);
  const [shopsList, setshopsList] = useState([
    {
      vehicle: "Car",
      img: "../../Car.jpg",
    },
    {
      vehicle: "Truck",
      img: "../../Truck.jpg",
    },
    {
      vehicle: "2_Wheeler",
      img: "../../Bikes.jpg",
    },
  ]);

  setTimeout(() => {
    setload(false);
  }, 2000);

  const context = useContext(Mycontext);
  const { Dark, setDark } = context;


  const navigate = useNavigate();
  let Prev_param = location.pathname.slice(0, -8);

  const Addvehicle = (vehicle) => {
    navigate(Prev_param + "/service" + "?" + Search + '&v=' + vehicle);
  };

  return (
    <div className={` py-32  ${Dark ? "Dark3" : "Light3"}`}>
      <ScrollTo />
      <h1 className={`  text-center pb-10 px-2 font-Poppins2 text-2xl`}>
        {load
          ? `Fetching Vehicles ...`
          : `Choose your vehicle for Service`}
      </h1>
      <motion.div
        initial={"Offscreen"}
        whileInView={"onScreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.1 }}
        className={` flex gap-10 font-Poppins1 flex-wrap flex-grow justify-center 
    
      `}
      >
        {load ? (
          <AniShop num={3} />
        ) : (
          shopsList.map((item, index) => {
            return (
              <div
                className=" h-[27rem]  rounded-lg overflow-hidden cursor-pointer 
          sm:w-[20rem]
          w-[17.3rem]
          mx-3
          text-white
          "
                key={index}
                onClick={() => Addvehicle(item.vehicle)}
              >
                <div className=" h-5/6 overflow-hidden group">
                  <img
                    src={item.img}
                    className=" h-full  group-hover:scale-110 duration-200 hover:duration-200   "
                  />
                </div>
                <div className=" text-2xl pt-4 text-center h-1/6 bg-blue-900">
                  <h1>
                    {item.vehicle === "2_Wheeler" ? "2 Wheeler" : item.vehicle}
                  </h1>
                </div>
              </div>
            );
          })
        )}
      </motion.div>
    </div>
  );
};

export default ChooseVehicle;
