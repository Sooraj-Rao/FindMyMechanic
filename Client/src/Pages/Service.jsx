import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Animate1 } from "../Framer/Framer";
import { Animate2 } from "../Framer/Framer";
import { Animate3 } from "../Framer/Framer";
import { Animate4 } from "../Framer/Framer";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";
import { Mycontext } from "../Components/Context";
import AniShop from "../LoadingAnimate/AniShop";
import ScrollTo from "../Components/ScrollTo";
import toast from "react-hot-toast";
import AniService from "../LoadingAnimate/AniService";

const Service = ({ booked, setbooked, Message }) => {
  const [Search, SetSearch] = useSearchParams();
  let id = (Search.get('s'));
  let vehicle = (Search.get('v'));
  const [load, setload] = useState({
    one: true,
    two: false,
  });
  const [shopsList, setshopsList] = useState([]);
  const [serviceid, setserviceid] = useState("");


  const navigate = useNavigate();

  const context = useContext(Mycontext);
  const { Dark, setDark, Server } = context;

  let userId = localStorage.getItem("user");

  const fetchData = async () => {
    try {
      const shops = await axios.get(
        `${Server}/BookService/services/${id}/${vehicle}`
      );
      setload({ ...load, one: false });
      setshopsList(shops.data);
    } catch (error) {
      setload({ ...load, one: false });
      toast.error('Failed To Book')
    }
  };

  const BookService = async (serviceId) => {
    setserviceid(serviceId);
    let shopId = id;
    let data = { serviceId, userId, shopId };
    try {
      setload({ ...load, two: true });
      const book = await axios.post(
        `${Server}/BookService/book`,
        data
      );
      setload({ ...load, two: false });
      if (book.data.code) {
        Message(book.data.message);
        setbooked(true);
      } else {
        toast.error(book.data.message);
      }
    } catch (error) {
      setload({ ...load, two: false });
      toast.error('Error Booking Service!');
    }
  };

  const Desc = {
    Oil: `Routine oil service is vital for optimal ${vehicle} performance. Change the oil and filter every 3,000 to 5,000 miles, adhering to the manufacturer's recommendations. Proper maintenance ensures engine longevity and efficiency.!`,
    Wheel: `Our wheel service focuses on optimizing your ${vehicle}'s wheels for peak performance. We offer truing to eliminate wobbles, spoke tension checks, and tire inspections for a smooth and safe riding experience`,
    Engine: `Engine service typically involves a comprehensive inspection, maintenance, and repair of a motorized vehicle's engine. This includes checking and adjusting components such as spark plugs, filters, oil levels, and belts to ensure optimal performance and longevity`
  }

  const Img = {
    Truck: ['../../Service/truck-1.jpg', '../../Service/truck-2.jpg', '../../Service/truck-3.jpg'],
    '2_Wheeler': ['../../Service/bike-1.jpg', '../../Service/bike-2.jpg', '../../Service/bike-3.jpg'],
    Car: ['../../Service/car-1.jpg', '../../Service/car-2.jpg', '../../Service/car-3.jpg'],

  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={`py-32    ${Dark ? "Dark3" : " bg-white/80"}`}>
      <ScrollTo />
      <h1 className={`  text-center pb-10 px-2 font-Poppins2 text-2xl`}>
        {load.one && `Fetching Services for your ${vehicle.includes('_') ? vehicle.replace('_', ' ') : vehicle}...`}
        {!load.one && shopsList.length > 0 && `Choose a Service for your
         ${vehicle.includes('_') ? vehicle.replace('_', ' ') : vehicle}`}
      </h1>
      <motion.div
        initial={"Offscreen"}
        whileInView={"onScreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.1 }}
        className={`  font-Poppins1 justify-center 
      mx-10
        `}
      >
        {load.one ? (
          <AniService />
        ) : (
          shopsList.map((item, index) => {
            return (
              <div
                className={`h-[20rem]  rounded-lg 
            sm:w-full 
            w-[18rem]
            p-4 flex
            text-white
            my-3
            ${Dark ? " bg-gray-900" : "Light"}
          `}
                key={index}
              >
                <div className=" mx-6 h-full min-w-[20rem] overflow-hidden bg-slate-400 rounded-md  ">
                  <img loading="lazy" src={Img[vehicle][index]} className=" h-full w-full  " />
                </div>
                <div className=" relative">
                  <div className=" text-xl pt-4  text-center flex justify-around" >
                    <h1>Service: {item.serviceName}</h1>
                    <h1>Rs. {item.serviceCost}</h1>
                    <button
                      className=" px-4 py-2 text-white text-base"
                      onClick={() => BookService(item._id)}
                    >
                      <h1>
                        {load.two && item._id == serviceid ? (
                          <PulseLoader color="white" size={8} />
                        ) : (
                          "Book Service"
                        )}
                      </h1>
                    </button>
                  </div>
                  <h1 className=" mt-10 text-justify">
                    {
                      Desc[item.serviceName]
                    }
                  </h1>
                  <h2 className=" absolute bottom-0 text-gray-400">Order can be canceled within 5 hours</h2>
                </div>
              </div>
            );
          })
        )}
        {!load.one && shopsList.length == 0 && (
          <div className=" text-center">
            <h1 className=" text-3xl">
              No Service found for{" "}
              {vehicle == "2_Wheeler" ? "2 wheeler" : vehicle}
            </h1>
            <button
              className=" p-3 mt-14 text-white"
              onClick={() => navigate("/bookService/shop?p=" + Search.get('p'))}
            >
              Check other shops
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Service;
