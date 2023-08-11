import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <section className="w-[100%] h-[100vh] bg-[#1E4C90]">
        <section className="shadow-even p-4 z-10 bg-white mx-auto max-w-[350px] relative top-[20%] rounded-xl">
          <h1 className="font-bold text-center py-2 text-[#465775] p-4">
            Create Account
          </h1>

          <section className="flex justify-center">
            <section>
              <form action="">
                <label className="text-[#465775] font-semibold text-sm p-2">
                  Name
                </label>
                <input
                  className="m-2 p-2 rounded-xl h-10 outline-0 border-2 w-72"
                  type="text"
                />
                <label className="text-[#465775] font-semibold text-sm p-2">
                  Email
                </label>
                <input
                  className="m-2 p-2 rounded-xl h-10 outline-0 border-2 w-72"
                  type="email"
                />
                <label className="text-[#465775] font-semibold text-sm p-2">
                  Password
                </label>
                <input
                  className="m-2 p-2 rounded-xl h-10 outline-0 border-2 w-72"
                  type="password"
                />
                <br />

                <input className="m-2 p-2" type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">Remember me</label>

                <button
                  className="block m-2 p-2 rounded-lg w-72 bg-[#1E4C90] hover:bg-gradient-to-l text-white font-semibold"
                  type="submit"
                >
                  Sign Up
                </button>
                <section className="flex justify-center">
                  <h1 className="text-center text-[#465775] font-semibold text-sm p-2">
                    Already have an account?
                  </h1>
                  <Link
                    className="text-center text-[#465775] font-semibold text-sm p-2"
                    href="/auth/register"
                  >
                    Login
                  </Link>
                </section>
              </form>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Login;
