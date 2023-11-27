import React, { createContext, useState } from "react";

export const Mycontext = createContext();

const Context = (props) => {
  const [Dummyshow, setDummyshow] = useState(false);
  const Server = import.meta.env.VITE_SERVER;
  const [Dark, setDark] = useState(false);
  let theme = localStorage.getItem('theme');
  return (
    <Mycontext.Provider value={{ Dark, setDark, Server, theme, Dummyshow, setDummyshow }}>
      {props.children}
    </Mycontext.Provider>
  );
};

export default Context;
