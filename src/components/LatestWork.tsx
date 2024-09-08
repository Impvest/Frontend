import React from "react";
import "../styles/global.css";
import Slider from "react-slick";
import LatestWorkCard from "./LastestWorkCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";
import { Virtual } from "swiper/modules";
interface LatestWorkIds {
  ids: number[];
}
const SwipeToSlide: React.FC<LatestWorkIds> = ({ ids }) => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: (index: number) => {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div>
      {/* small */}
    <div className="md:hidden w-full flex">
      <Swiper modules={[Virtual]} spaceBetween={10} slidesPerView={2.3} virtual> {/* slidePerView suppose to be auto. if yes it slider will relate to space between */}
        {ids.map((id) => (
          <SwiperSlide>
            <LatestWorkCard index={id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    {/* md */}
    <div className="hidden w-full md:flex">
    <Swiper modules={[Virtual]} spaceBetween={10} slidesPerView={4} virtual>
      {ids.map((id) => (
        <SwiperSlide>
          <LatestWorkCard index={id} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  {/* lg */}
      {/* <div className="hidden lg:flex w-full">
      <Swiper modules={[Virtual]} spaceBetween={10} slidesPerView={4.5} virtual>
        {ids.map((id) => (
          <SwiperSlide>
            <LatestWorkCard index={id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div> */}
    </div>
  );
};

export default SwipeToSlide;
