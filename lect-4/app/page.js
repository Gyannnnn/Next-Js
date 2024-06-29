"use client";

import Image from "next/image";

export default function Home() {
  const handleClick = async () => {
    let data = {
      name: "Gyana",
      age: 10,
    };
    let response = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await response.json();
    console.log(res);
  };

  return (
    <div className="p-10">
      <h1 className="text-white font-bold text-xl">Testing API</h1>
      <button
        onClick={handleClick}
        className="bg-blue-600 rounded-md px-4 py-1 text-white"
      >
        Click Here
      </button>
    </div>
  );
}
