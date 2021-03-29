import React, { useContext } from "react";
import Home from '../../components/Home'
// Material
// Context
import { Context } from "../../utils/Context";

export default function Landing() {
  const {valueSearch, setValueSearch} = useContext(Context)
  return (
    <>
      <Home />
    </>
  );
}
