import Image from "next/image";
import Login from "../components/Login";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <main className="w-[100%] h-auto">
        <Navbar />
        <Login />
      </main>
    </>
  );
}
