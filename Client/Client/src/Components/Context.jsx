import React, { createContext, useState } from "react";

export const Mycontext = createContext();

const Context = (props) => {
  const Server = import.meta.env.VITE_SERVER;
  const [Dark, setDark] = useState(false);
  return (
    <Mycontext.Provider value={{ Dark, setDark, Server }}>
      {props.children}
    </Mycontext.Provider>
  );
};

export default Context;
