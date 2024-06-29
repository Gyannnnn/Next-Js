"use client";

import { handleSubmit } from "@/Actions/form";
import { useRef } from "react";
export default function Home() {
  const ref = useRef();
  return (
    <div className="h-screen w-full flex justify-center items-center ">
      <form
        ref={ref}
        className="border rounded-xl bg-zinc-800 h-96 w-1/2 flex flex-col items-center justify-center gap-5"
        action={(e) => {
          handleSubmit(e);
          ref.current.reset();
        }}
      >
        <div className="flex gap-2">
          <label htmlFor="name">Name</label>
          <input
            className="bg-transparent px-2 border rounded-md py-1 outline-none"
            name="name"
            id="name"
            type="text"
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="name">Addres</label>
          <input
            className="bg-transparent px-2 border rounded-md py-1 outline-none"
            name="add"
            id="add"
            type="text"
          />
        </div>
        <div>
          <button className="px-4 py-1 bg-blue-600 rounded-md">Submit</button>
        </div>
      </form>
    </div>
  );
}
