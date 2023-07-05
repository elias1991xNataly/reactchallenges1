import UserContextProvider from "./components/Counter/Counter";
import React, { useState } from "react";
import NextBtn from "./components/NextBtn/NextBtn";
import PrevBtn from "./components/PrevBtn/PrevBtn";
import Counter from "./components/Counter/Counter";

export default function App() {
  const [count,setCount]=useState(0);
  return(
    <UserContextProvider >
      <NextBtn/>
      <PrevBtn/>
  </UserContextProvider>
    );
}