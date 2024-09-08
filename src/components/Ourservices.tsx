import React, { useState } from "react";

const departmentServices = [
  { id: 0, name: "Consulting", link: "https://www.google.com/?hl=en" },
  { id: 1, name: "Academy", link: "https://www.google.com/?hl=en" },
  { id: 2, name: "Innovation", link: "https://www.google.com/?hl=en" },
];

const OurServices: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handlePreviousDepartment = () => {
    setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextDepartment = () => {
    setIndex((prevIndex) =>
      Math.min(prevIndex + 1, departmentServices.length - 1)
    );
  };

  const ArrowIcon = ({ position }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      className={`absolute ${position}`}
    >
      <rect width="34" height="34" rx="17" fill="white" />
      <path
        d="M8.93934 23.9393C8.35355 24.5251 8.35355 25.4749 8.93934 26.0607C9.52513 26.6464 10.4749 26.6464 11.0607 26.0607L8.93934 23.9393ZM26.5 10C26.5 9.17157 25.8284 8.5 25 8.5L11.5 8.5C10.6716 8.5 10 9.17157 10 10C10 10.8284 10.6716 11.5 11.5 11.5H23.5V23.5C23.5 24.3284 24.1716 25 25 25C25.8284 25 26.5 24.3284 26.5 23.5L26.5 10ZM11.0607 26.0607L26.0607 11.0607L23.9393 8.93934L8.93934 23.9393L11.0607 26.0607Z"
        fill="black"
      />
    </svg>
  );

  const currentDepartment = departmentServices[index];

  return (
    <div className="relative h-[357px] md:h-[363px] lg:h-[647px] bg-[linear-gradient(to_bottom,_var(--green-color)_90%,_white_50%)]  pt-[34px] md:pt-4 lg:pt-14">
      <div className="text-[30px] lg:text-[66px] md:text-[40px] text-white font-LineBold ml-5 md:ml-6 lg:ml-[160px] ">
        Our Services
      </div>
      <div className="hidden md:flex mt-2 lg:mt-11 w-full h-fit gap-8 lg:gap-14 justify-center items-center">
      <div className="relative w-44 lg:w-[338px] h-[235px] lg:h-[450px] pl-3.5 lg:pl-7 pb-3 bg-[#d9d9d9] flex-col justify-end inline-flex border-b-8 border-[#DAFABC]">
          <ArrowIcon position="top-3 right-3" />
          <div className="text-xl lg:text-4xl fontpLineBold">
            Consulting
          </div>
        </div>
        <div className="relative w-44 lg:w-[338px] h-[235px] lg:h-[450px] pl-3.5 lg:pl-7 pb-3 bg-[#d9d9d9] flex-col justify-end inline-flex border-b-8 border-[#DAFABC]">
          <ArrowIcon position="top-3 right-3" />
          <div className="text-xl lg:text-4xl fontpLineBold">
            Academy
          </div>
        </div>
        <div className="relative w-44 lg:w-[338px] h-[235px] lg:h-[450px] pl-3.5 lg:pl-7 pb-3 bg-[#d9d9d9] flex-col justify-end inline-flex border-b-8 border-[#DAFABC]">
          <ArrowIcon position="top-3 right-3" />
          <div className="text-xl lg:text-4xl fontpLineBold">
            Innovation
          </div>
        </div>
      </div>
      

      {/* small */}
      <div className="md:hidden lg:hidden flex h-fit w-full justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="49"
        height="90"
        viewBox="0 0 49 90"
        fill="none"
        className={`rotate-180 mt-[62px] mr-[14px] cursor-pointer ${index === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handlePreviousDepartment}
      >
        <path
          d="M14 66L35.2682 45.2152C35.6696 44.8229 35.6696 44.1771 35.2682 43.7848L14 23"
          stroke="white"
          strokeOpacity="0.45"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <div className="w-[256px] h-[243px] bg-[#D9D9D9] relative p-[15px]">
        <div className="font-LineBold text-[20px] absolute bottom-[13px] left-[15px]">
          {currentDepartment.name}
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="49"
        height="90"
        viewBox="0 0 49 90"
        fill="none"
        className={`mt-[62px] ml-[14px] cursor-pointer ${index === departmentServices.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handleNextDepartment}
      >
        <path
          d="M14 66L35.2682 45.2152C35.6696 44.8229 35.6696 44.1771 35.2682 43.7848L14 23"
          stroke="white"
          strokeOpacity="0.45"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
    <div className="md:hidden lg:hidden w-full h-fit mt-[14px] flex justify-center gap-[12px]">
      {departmentServices.map((_, i) => (
        <div
          key={i}
          className={`h-[9px] w-[9px] rounded-full ${i === index ? 'bg-black' : 'bg-[rgba(0,_0,_0,_0.20)]'}`}
        />
      ))}
    </div>
    </div>
  );
};

export default OurServices;
