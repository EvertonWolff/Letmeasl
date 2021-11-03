import { useState } from "react";
// type ButtonProps = {
//   text?: string;
// }  tipagem  //

export function Button(){

  // let counter = 0;
  const [counter, setCounter] = useState(0)

  function increment(){
    setCounter(counter + 1);
    console.log(counter);
  }

 return (
   <button onClick={increment}>{counter}</button> 
 )
 }