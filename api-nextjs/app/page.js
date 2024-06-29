"use client";
import Image from "next/image";
export default function Home() {
  const handleFetch = async()=>{
    let data = {
      name:"Gyanranjan Patra",
      role:"SDE"
    }
    let a = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await a.json()
    console.log(res)
  }
  return (
    <div className="p-10 flex gap-10">
      <h1 className="text-white text-xl">Api Routes Demo</h1>
      <button
        onClick={handleFetch}
        className="bg-blue-600 px-4 py-1 rounded-md
      "
      >
        Click Me
      </button>
    </div>
  );
}
