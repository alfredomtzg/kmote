import React, { useState } from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {

  const [search, setSearch] =useState("");
  const [candidates, setCandidates]= useState([]);

 // return Value
  return (
    <Context.Provider
      value={{
        search, 
        setSearch,
        candidates, 
        setCandidates
      }}
    >
      {children}
    </Context.Provider>
  );
};