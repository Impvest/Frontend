import React from 'react';
import '../styles/global.css';
import mockData, { getDataByIndex } from './mockData';
import latestWorkImage from "../../public/images/latestWork1.svg";

interface LatestWorkCardProps {
  index: number;
}
const departments = ["Innovation", "Academy", "Consulting"];

const LatestWorkCard: React.FC<LatestWorkCardProps> = ({ index }) => {
  const data = getDataByIndex(index)

  if (!data) {
    return <div>No data found</div>; 
  }
  console.log(data.picturePath)

  return (      
      <div className="work-card" style={{gap:'14px', width: "150px", height: "275px", display: 'flex', flexDirection: 'column',border: '1px solid #ccc'}}>
          <img
          src={latestWorkImage}
          alt="Impvest"
          style={{ width: '100%' }}
        />
          {/* <div style={{ width: '100%', height: '150px', border: '1px solid black' }} /> */}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ textAlign: 'left', fontSize: '9px', fontStyle: 'normal', fontWeight: '400' }}>
              {departments[data.departmentId]}
            </div>
            <div style={{ textAlign: 'left', fontSize: '16px', fontStyle: 'normal', fontWeight: '700' }}>
              {data.topic}
            </div>
          </div>

          <div style={{ textAlign: 'left', fontSize: '10px', fontStyle: 'normal', fontWeight: '400', lineHeight: '12px' }}>
            {data.detail}
          </div>
      </div>
  );
};

export default LatestWorkCard;
