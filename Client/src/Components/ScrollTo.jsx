import React from "react";
import { useEffect } from "react";

const ScrollTo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div></div>;
};

export default ScrollTo;
