import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <section className="flex justify-center gap-10 bg-[#1E4C90]">
        <Link
          href="/login"
          className="px-2 py-1 rounded-xl bg-[#1E4C90] text-white font-bold"
        >
          {" "}
          Login
        </Link>
        <Link
          href="/signup"
          className="px-2 py-1 rounded-xl bg-[#1E4C90] text-white font-bold"
        >
          {" "}
          SignUp
        </Link>
        <Link
          href="/pricing"
          className="px-2 py-1 rounded-xl bg-[#1E4C90] text-white font-bold"
        >
          {" "}
          Pricing
        </Link>
      </section>
    </>
  );
};

export default Navbar;
