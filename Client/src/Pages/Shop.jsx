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
import toast from "react-hot-toast";

const Shop = () => {
  const [Search, SetSearch] = useSearchParams();
  const location = useLocation();
  const [shopsList, setshopsList] = useState([]);
  const [loader, setloader] = useState(true);
  const navigate = useNavigate();

  const context = useContext(Mycontext);
  const { Dark, setDark, Server } = context;

  let pincode = Search.get('p');


  const fetchData = async () => {
    try {
      const shops = await axios.get(
        `${Server}/BookService/shops/${pincode}`
      );
      setloader(false);
      setshopsList(shops.data);
    } catch (error) {
      setloader(false);
      toast.error('Failed to fetch Shops!')
    }
  };
  const params = location.pathname
  const Prev_param = params.slice(0, -4)
  const viewServies = (id) => {
    navigate(Prev_param + "vehicle" + "?" + "s=" + id + '&' + location.search.slice(1));
  };

  useEffect(() => {
    fetchData();
  }, [pincode]);

  const GarageImage = ['../../Garage/2.jpg', '../../Garage/3.jpg', '../../Garage/4.jpg', '../../Garage/1.jpg']

  return (
    <div className={`py-32  ${Dark ? "Dark2" : "Light1"}`}>
      <ScrollTo />
      <h1 className={`  text-center pb-10 px-2 font-Poppins2 text-2xl`}>
        {loader && `Finding shops in ${pincode} ...`}
        {!loader &&
          shopsList.length > 0 &&
          `Found ${shopsList.length} shops in  Pincode ${pincode}`}
      </h1>
      <motion.div
        initial={"Offscreen"}
        whileInView={"onScreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.1 }}
        variants={Animate4}
        className={`flex gap-10 font-Poppins1  flex-wrap flex-grow justify-center 
     
      `}
      >
        {loader ? (
          <AniShop num={4} />
        ) : (
          shopsList.map((item, index) => {
            return (
              <div
                className={` h-[30rem]  rounded-lg
          md:w-[20rem]
          w-[17rem]
          mx-3 
          p-4

           ${Dark ? " bg-gray-900" : "Light"}
          `}
                key={index}
              >
                <div className=" h-4/6  ">
                  <img loading="lazy" src={GarageImage[index]} className=" bg-slate-400  h-full" />
                </div>
                <div
                  className=" text-xl text-center mt-3 "
                  key={item}
                >
                  <h1 >{item.shopName}</h1>
                  <h1 className=" text-gray-400">{item.shopAddress}</h1>
                  <button
                    className=" px-4 py-2 mt-2 text-white text-base "
                    onClick={() => viewServies(item._id)}
                  >
                    View Services
                  </button>
                </div>
              </div>
            );
          })
        )}
        {!loader && shopsList.length == 0 && (
          <div className=" text-center">
            <h1 className=" text-3xl">No Shops found in Pincode {pincode}</h1>
            <button
              className=" p-3 mt-14 text-white"
              onClick={() => navigate("/bookService")}
            >
              Go back
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Shop;
