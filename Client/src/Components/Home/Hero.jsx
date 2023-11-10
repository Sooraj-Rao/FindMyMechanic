import React, { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Mycontext } from "../Context";
import { motion } from "framer-motion";
import { Animate1, Animate4 } from "../../Framer/Framer";

const Hero = () => {
  const context = useContext(Mycontext);
  const { Dark, setDark } = context;

  return (
    <div className={` ${Dark ? "Dark2" : "Light"}`}>
      <motion.div
        className={`flex justify-between gap-10 w-screen 
     
         p-10  h-fit  pt-20 
        lg:flex-row
        flex-col
      `}
        initial={"Offscreen"}
        whileInView={"onScreen"}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <div
          className="
        rounded-lg
       overflow-hidden
      lg:w-1/2
      lg:h-[30rem]
      sm:h-[25rem]
      h-[20rem]
      "
        >
          <Carousel autoPlay={true} infiniteLoop={true}>
            <div>
              <img src="../../../service1.jpg" alt="Image 1" />
            </div>
            <div>
              <img
                src="../../../Bike.jpg"
                style={{ backgroundSize: "cover" }}
                alt="Image 2"
              />
            </div>
            <div>
              <img src="../../../Car-service.jpg" alt="Image 3" />
            </div>
          </Carousel>
        </div>
        <motion.div
          className="  pt-10
      lg:w-1/2
      w-full
      "
          variants={Animate4}
        >
          <div
            className={`
    ${!Dark ? "text-blue-900" : "text-blue-400"}
             lg:text-[2rem] xl:text-[2.08rem] 2xl:text-[2.55rem] sm:text-3xl text-xl  font-Poppins2
             `}
          >
            <h1 className=" sm:pb-2">No More Worries..</h1>
            <h1>Vehicle Repairs at Your Fingertips!</h1>
          </div>
          <div className=" pt-10 lg:text-2xl text-md font-Poppins1">
            <span>
              Discover the future of automotive care with our online service
              booking platform. Our website simplifies the process of finding
              services for your vehicle and booking appointments. It's the
              ultimate solution for a hassle-free, efficient, and expert car
              service experience.
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
