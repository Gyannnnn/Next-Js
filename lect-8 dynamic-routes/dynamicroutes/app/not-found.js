import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-full bg-red-600 flex items-center justify-center">
      <div className=" h-40 w-96 flex flex-col items-center justify-center gap-2 ">
        <h2 className="font-extrabold text-4xl">Not Found</h2>
        <p>Could not find requested resource</p>
        <Link className="bg-white text-black px-4 py-1 rounded-md" href="/">Return Home</Link>
      </div>
    </div>
  );
}
