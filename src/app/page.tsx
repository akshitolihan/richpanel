import Image from "next/image";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PricingPage from "./components/Pricing";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <main className="w-[100%] h-auto">
        <Navbar />
        <h1 className="bg-[#1E4C90] w-[100%] h-[95.5vh] text-center  pt-60 text-white font-bold text-3xl">
          Welcome to Our Site
        </h1>
      </main>
    </>
  );
}
