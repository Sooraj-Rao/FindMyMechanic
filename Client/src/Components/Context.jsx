import React, { createContext, useState } from "react";

export const Mycontext = createContext();

const Context = (props) => {
  const [Dark, setDark] = useState(false);
  return (
    <Mycontext.Provider value={{ Dark, setDark }}>
      {props.children}
    </Mycontext.Provider>
  );
};

export default Context;
