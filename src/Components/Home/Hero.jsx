import React, { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Mycontext} from '../Context'

const Hero = () => {

  const context = useContext(Mycontext);
  const { Dark, setDark } = context;

  
  return (
    <div className={` w-screen  ${Dark?'Dark2':'Light'}  h-fit  py-10 "`}>
      <div
        className="mx-auto
      xl:w-1/2
    md:w-4/6
    sm:w-5/6 
    w-full
    h-[30rem]
    "
      >
        <Carousel autoPlay={true} infiniteLoop={true}>
          <div>
            <img src="https://p1.rs/Qjz2Z" alt="Image 1" />
          </div>
          <div>
            <img src="../../../public/Bike.jpg" style={{backgroundSize:'cover'}} alt="Image 1" />
          </div>
          <div>
            <img src="../../../public/Car.jpg" alt="Image 1" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
