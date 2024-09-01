import React from 'react';
import '../styles/global.css';
import Slider from 'react-slick';
import LatestWorkCard from './LastestWorkCard';

interface LatestWorkIds{
     ids: number[];
}
const SwipeToSlide: React.FC<LatestWorkIds> = ({ids}) => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: (index: number) => {
      console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
    }
  };

  return (
    <div style={{gap:"20px", display:'flex', width:'screen',height:'fit'}}>
        {ids.map((id) => (
        <LatestWorkCard index={id} />
        ))}

    </div>
        
    // <div className="slider-container">
    //   <Slider {...settings}>
    //     {ids.map((id) => (
    //         <LatestWorkCard index={id} />
    //     ))}
    //   </Slider>
    // </div>
  );
};

export default SwipeToSlide;
