import React, { useState } from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {

  const [valueSearch, setValueSearch] =useState("");
 

 // return Value
  return (
    <Context.Provider
      value={{
        valueSearch, 
        setValueSearch
      }}
    >
      {children}
    </Context.Provider>
  );
};