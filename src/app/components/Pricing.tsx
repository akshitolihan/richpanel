import React from "react";

const PricingPage = () => {
  const plans = [
    {
      name: "Montly Price",
      mobile: "$100",
      basic: "$100",
      standard: "$100",
      premium: "$100",
    },
    {
      name: "Video Quality",
      mobile: "Good",
      basic: "Good",
      standard: "Better",
      premium: "Best",
    },
    {
      name: "Resolution",
      mobile: "480p",
      basic: "480p",
      standard: "1080p",
      premium: "4K + HDR",
    },
    {
      name: "Devices you can use to watch",
      mobile: ["Phone", "Tablet"],
      basic: ["Phone", "Tablet"],
      standard: ["Phone", "Tablet"],
      premium: ["Phone", "Tablet"],
    },
  ];
  const plans1 = ["Mobile", "Basic", "Standard", "Premium"];

  return (
    <>
      <div className="w-[100%] h-[100%] bg-[#1E4C90] ">
        <section className="flex justify-evenly ">
          <div className="flex justify-center bg-[#ffffff] w-60 rounded-full h-12 mt-10">
            <button className="p-1 m-2 px-3 text-[#ffffff] rounded-full bg-[#1E4C90]">
              Monthly
            </button>
            <button className="p-1 m-2 px-3 text-[#ffffff] rounded-full bg-[#1E4C90]">
              Yearly
            </button>
          </div>
          <tr className="flex justify-center gap-10">
            <section className="flex justify-center">
              {plans1.map((ele, index) => (
                // <h1 key={ele.name}>{ele.name}</h1>
                <td key={index}>
                  <button className="flex flex-col justify-center items-center m-2">
                    <button className="w-28 h-28 bg-[#1E4C90] text-white">
                      {ele}
                    </button>
                    <div className="w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-[#1E4C90] border-r-[10px] border-r-transparent"></div>
                  </button>
                </td>
              ))}
            </section>
          </tr>
        </section>
        {plans.map((ele, key) => (
          <>
            <section className="flex justify-evenly">
              <div className="flex justify-center bg-[#ffffff] w-60 rounded-full h-12 mt-10">
                <button className="p-1 m-2 px-3 text-black rounded-full bg-[#ffffff]">
                  {ele.name}
                </button>
              </div>
              <tr className="flex justify-center gap-10">
                <section className="flex justify-center">
                  <td>
                    <button className="flex flex- justify-center items-center m-2">
                      <button className="w-28 h-28  text-white">
                        {ele.mobile}
                      </button>
                      <button className="w-28 h-28  text-white">
                        {ele.basic}
                      </button>
                      <button className="w-28 h-28  text-white">
                        {ele.standard}
                      </button>
                      <button className="w-28 h-28  text-white">
                        {ele.premium}
                      </button>
                    </button>
                  </td>
                </section>
              </tr>
            </section>
          </>
        ))}
      </div>
    </>
  );
};

export default PricingPage;
