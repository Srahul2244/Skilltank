import React from "react";
import image from "../Images/img.png";
import img from "../Images/unsplash_tleCJiDOri0.png";
import right from "../Images/trun.png";
import search from "../Images/search.png";
import rahul from "../Images/rahul.png";

const Header = () => {
  return (
    <div>
      <div className="flex gap-8 ">
        <div className=" mt-10 leading-[2px]  mx-44">
          <div className="h-10 w-[400px] flex gap-4  items-center justify-center mx-[-45px] ">
            <h1 className="text-[#2f2e2e] font-bold text-[33px]">
              Getting you
            </h1>
            <div className="my-40 h-14 w-14 rounded-full bg-pink-600 text-white flex items-center justify-center">
              {" "}
              4.9
            </div>
          </div>

          <div className=" mt-4 h-10 w-[400px] flex gap-4  items-center justify-center mx-[-50px]">
            <div className="my-40 h-14 w-14 rounded-full">
              <img
                className="h-full w-full rounded-full"
                src={image}
                alt="img"
              />
             
            </div>
            <h1 className="text-[#2f2e2e] font-bold text-[33px]">where you</h1>
          </div>
          <div className=" mt-4 h-10 w-[500px] flex gap-4  items-center justify-center mx-[-75px]">
            <h1 className="text-[#2f2e2e] font-bold text-[33px]">
              Want to study .
            </h1>
            <img className="h-14 w-14 rounded-full" src={right} alt="images" />
          </div>
          <div className=" mt-4 h-20 w-[400px] flex gap-8  items-center justify-center  ">
            <p className=" text-[#939191] font-bold text-lg my-11 text-left">
              Everything you need to know for your study abroad journey: from
              first search to your first day on campus.
            </p>
          </div>

          <div
            className=" w-[450px]  mt-10 items-start pl-10 h-60"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
            }}
          >
            <div className="flex gap-10 ">
              <div className="py-6 flex gap-2">
                <img
                  className="h-4 w-4 rounded-full mt-[-8px]"
                  src={image}
                  alt="img"
                />
                <h1 className="text-[#616162] font-bold text-[18px]">
                  Courses
                </h1>
              </div>
              <div className="py-6 flex gap-2">
                <img
                  className="h-4 w-4 rounded-full mt-[-8px]"
                  src={image}
                  alt="img"
                />
                <h1 className="text-[#7c7d7e] font-bold text-[18px]">
                  Services
                </h1>
              </div>
            </div>

            <div className="h-1 w-24 bg-blue-800 mt-[-20px]"></div>
            <input
              type="text"
              placeholder="what do you want to study?"
              className="w-96 h-14 border-2 border-black-300  mb-8 mt-4"
            />
            <div className="w-96 flex  h-14 border-2 border-black-300  ">
              <input
                type="text"
                placeholder="what do you want to study?"
                className="w-96 h-14 border-2 border-black-300"
              />
              <button className="flex border-2 w-32 h-14 items-center justify-center bg-violet-400 text-white font-bold">
                {<img className="h-5 w-5 rounded-full mt-1" src={search} />}
                Search
              </button>
            </div>
          </div>
        </div>
        <div
          className="shadow-4xl mt-10 px-4 "
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
          }}
        >
          <img src={rahul} alt="img" className="rounded-3xl " />
        </div>
      </div>
      <header>
        <div className="text-center">
          <h1 className="my-10 mt-24 text-[#000000] font-bold text-[56px]">
            About
          </h1>
        </div>
        <div className="w-2/5 mx-auto">
          <p className="text-center text-[#000000] font-normal text-lg my-11">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div>
          <img className="mt-[76px] w-9/12 mx-auto" src={image} alt="" />
        </div>
      </header>
      <div className="flex flex-wrap items-center mt-[112px] mx-auto w-10/12">
        <p className="mx-5 text-[#000000] font-medium text-base">ACHIEVEMENT</p>
        <div className="border-[1px] border-[#000000] h-0 w-[350px]"></div>
      </div>
      <div className=" mt-[20px] mx-auto w-10/12">
        <p className="text-[#000000] font-semibold text-4xl w-[54%] leading-[50px] md:inline-block md:w-10/12 lg:w-[54%]">
          interior customization with Danaanz, best quality with professional
          workers
        </p>
      </div>

      <div className="lg:flex gap-[45px] w-10/12 mx-auto mt-16">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="bg-[#2C3878] lg:w-2/12 sm:w-12/12">
          <div>
            <h1 className="text-[#FFFFFF] my-6 text-center font-base text-5xl ">
              350+
            </h1>
            <p className="text-[#FFFFFF] my-2 text-center font-base text-base">
              Project Completed
            </p>
          </div>
          <div>
            <h1 className="text-[#FFFFFF] my-6 text-center font-base text-5xl mt-20">
              23+
            </h1>
            <p className="text-[#FFFFFF] my-2 text-center font-base text-base">
              Professional Teams
            </p>
          </div>
          <div>
            <h1 className="text-[#FFFFFF] my-6 text-center font-base text-5xl mt-24">
              15+
            </h1>
            <p className="text-[#FFFFFF] my-2 text-center font-base text-base">
              Years Experience
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center mt-[20px] mx-auto w-10/12">
        <p className="mx-5 text-[#000000] font-medium text-base">ACHIEVEMENT</p>
        <div className="border-[1px] border-[#000000] h-0 w-[350px]"></div>
      </div>
      <div className=" mt-[10px] mx-auto w-10/12 ">
        <h1 className="text-[#333333]  font-semibold text-4xl lg:w-[54%]  my-10 ">
          Why Choose Us
        </h1>
        <p className="text-[#9C9C9C] lg:text-lg lg:w-5/12 ">
          Customize your interior design into a dream place with the best
          designers and quality furniture. We try our best to fulfill your
          expectations.
        </p>
      </div>

      <div className="mt-[30px] mx-auto w-10/12 ">
        <div className="md:flex items-center md:gap-5 sm:flex-row ">
          <div className="shadow-[0px 0px 5px 1px rgba(0, 0, 0, 0.1)] bg-[#FFFFFF] border-2  rounded-lg my-5">
            <div className="border-2 h-20 w-20 rounded-full mx-auto my-7 bg-gray-500"></div>
            <h1 className="text-[#333333] text-2xl py-5 text-center">
              High Quality
            </h1>
            <p className="text-[#9C9C9C] text-base text-center">
              Customize your interior design into a dream place with the best
              designers and quality furniture. We try our best to fulfill your
              expectations.
            </p>
          </div>
          <div className="shadow-[0px 0px 5px 1px rgba(0, 0, 0, 0.1)]  border-2 rounded-lg my-5">
            <div className="border-2 h-20 w-20 rounded-full mx-auto my-7 bg-gray-500"></div>
            <h1 className="text-[#333333] text-2xl py-5 text-center">
              High Quality
            </h1>
            <p className="text-[#9C9C9C] text-base text-center">
              Customize your interior design into a dream place with the best
              designers and quality furniture. We try our best to fulfill your
              expectations.
            </p>
          </div>
          <div className="shadow-[0px 0px 5px 1px rgba(0, 0, 0, 0.1)]  border-2 rounded-lg my-5">
            <div className="border-2 h-20 w-20 rounded-full mx-auto my-7 bg-gray-500"></div>
            <h1 className="text-[#333333] text-2xl py-5 text-center">
              High Quality
            </h1>
            <p className="text-[#9C9C9C] text-base text-center">
              Customize your interior design into a dream place with the best
              designers and quality furniture. We try our best to fulfill your
              expectations.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#2C3878] lg:w-full sm:h-fit">
        <div className="lg:flex items-center justify-around sm:flex-row ">
          <div className="lg:w-5/12 py-10 text-[#FFFFFF] sm:w-8/12">
            <p className="text-4xl font-semibold ">
              let's discuss making your interior like a dream place!
            </p>
          </div>
          <div>
            <p className=" w-10/12 py-8 text-[#FFFFFF] font-normal text-lg">
              Contact us below to work together to build your amazing interior
            </p>
            <h1 className="lg:px-7 bg-[#FFFFFF] w-3/12 py-4 rounded-sm  my-5  ">
              Contact Us
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
