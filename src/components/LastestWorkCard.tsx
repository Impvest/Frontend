import React from "react";
import "../styles/global.css";
import mockData, { getDataByIndex } from "./mockData";
import latestWorkImage from "../../public/images/latestWork1.svg";
import { Swiper, SwiperSlide } from "swiper/react";

interface LatestWorkCardProps {
  index: number;
}
const departments = ["Innovation", "Academy", "Consulting"];

const LatestWorkCard: React.FC<LatestWorkCardProps> = ({ index }) => {
  const data = getDataByIndex(index);

  if (!data) {
    return <div>No data found</div>;
  }
  console.log(data.picturePath);

  return (
    <SwiperSlide>
      <div className=" w-[150px] md:w-[200px] lg:w-[255px] block rounded-lg overflow-hidden">
        <img
          src={latestWorkImage}
          alt="Impvest"
          className="w-max rounded-[25px]"
        />
        <div className="flex flex-col md:mt-3">
          <div className="text-xs lg:text-base font-LineRg leading-[9px]">
            {departments[data.departmentId]}
          </div>
          <div className="mt-2 text-base md:text-xl lg:text-3xl font-LineBold leading-none md:leading-tight lg:leading-[30px]">{data.topic}</div>
          <div className="mt-3.5 md:mt-6 text-[10px] lg:text-xl md:text-base font-LineRg leading-3 md:leading-[18px] text-[#707070]">
            {data.detail}
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default LatestWorkCard;
