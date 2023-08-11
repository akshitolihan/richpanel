import Image from "next/image";
import SignUp from "../components/SignUp";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <main className="w-[100%] h-auto">
        <Navbar />
        <SignUp />
      </main>
    </>
  );
}
