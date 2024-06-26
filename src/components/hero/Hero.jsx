import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import {  FaLinkedinIn } from "react-icons/fa";

import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";



const Hero = () => {
  return (
    <div
    id="home"
    style={{
      backgroundImage: 'url("https://images.pexels.com/photos/8217425/pexels-photo-8217425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      backgroundSize: 'cover',
      backgroundPosition: 'center', 
      // height: '100vh' 
    }}
  >
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-4xl font-bold sm:text-[2rem]"
            >
              <span style={{ fontWeight: 'bolder', color: 'black', fontFamily: 'Bradley Hand, cursive'}}>Digital banking</span> <span style={{ fontWeight: '100px', color: '	#6050dc' }}>simplifies</span> <span style={{ fontWeight: 'bolder', color: 'black' }}>life.</span> 
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={["-    Bank your way -any time,anywhere. Use mobile and online banking to fit your lifestyle. ", 2000, "Manage you accounts, apply for products and tap and pay with your phone. it's really that easy.", 2000, ""]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-gray-400 text-2xl font-small sm:text-2xl"
            />
         
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href=""
               className="bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-[32px] font-bold hover:text-blue-500"
            >
              <span> Apply my card </span>
            </a>
          
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a href="https://github.com/migftson00">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
              data-aos="fade-up"
              className=" h-[90%]  w-full object-cover md:h-[95%] md:m-auto sm:m-0"
              src="https://i.postimg.cc/XvSL2WzG/young-woman-holding-tablet-work.png"
              // src={mine}
              alt="mine"
            />
            <div className=" absolute bottom-10 md:bottom-3 right-8 md:right-2">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className=" relative cursor-pointer"
              >
                <img
                  className=" w-[135px] md:w-[90px] circle-text"
                  src="https://i.postimg.cc/zXF32bkY/business-growth-money-savings-statistics-1.png"
                  alt=""
                />
                <FaPlay className=" text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
