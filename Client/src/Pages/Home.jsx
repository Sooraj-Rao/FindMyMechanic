import React from "react";
import Hero from "../Components/Home/Hero";
import LandingPage from "../Components/Home/LandingPage";
import Card from "../Components/Home/Card";
import BookNow from "../Components/Home/BookNow";
import ScrollTo from "../Components/ScrollTo";

const Home = () => {
  return (
    <div>
      <ScrollTo />
      <LandingPage />
      <Hero />
      <Card />
      <BookNow />
    </div>
  );
};

export default Home;
