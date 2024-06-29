// "use client"
import fs from "fs/promises"

// import { useState, useEffect } from "react";
export default function Home() {
  // const [count, Setcount] = useState(0);
  // if (count < 0) {
  //   alert("You Cannot Decrease More");
  // }
  let a = fs.readFile(".gitignore")
  a.then((e)=>{console.log(e.toString())})
  console.log("Hello World 00")
  return (
    <h1>He</h1>
    // <div>
    //   I Am a Component{count}
    //   <div className="flex flex-col w-24 gap-3 mt-3">
    //     <button
    //       className="bg-blue-600 rounded-md px-4 py-2"
    //       onClick={() => {
    //         Setcount(count + 1);
    //       }}
    //     >
    //       Increase
    //     </button>
    //     <button
      
    //       className="bg-blue-600 rounded-md px-4 py-2"
    //       onClick={() => {
    //         Setcount(count - 1);
    //       }}
    //     >
    //       Decrease
    //     </button>
    //   </div>
    // </div>
  );
}
