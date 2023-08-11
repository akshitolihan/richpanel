import Image from "next/image";
import Pricing from "../components/Pricing";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <main className="w-[100%] h-auto">
        <Navbar />
        <Pricing />
      </main>
    </>
  );
}
