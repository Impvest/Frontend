import React from 'react';
import { Link } from 'react-router-dom';
import LatestWorkCard from '../components/LastestWorkCard';
import LatestWork from '../components/LatestWork';
import LatestWorkIds from '../components/LatestWork';
import Test from '../components/test';
import Background from "../../public/images/homeBackground.svg";
// import logo from "../../pulic/images/impvestLogo.svg";
// public\images\homeBackground.svg
// public\images\homeBackground.svg

const Home = () => {
  const ids = [0,1];
  return (
    <div>

        {/* <img
          src={Background}
          alt="Impvest"
          style={{ : '33px' }}
        /> */}
      <div className="Intro" 
        style={{
          backgroundImage:  `url(${Background})`, // Correct usage here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '650px',
          paddingTop: '186px',
          paddingLeft: '25px',
          paddingRight:'10px',
        }}>
        <h1>
          Impvest พร้อมที่จะ ผลักดัน SME ไทย ให้เติบโตอย่างยั่งยืน 
        </h1>
        
      </div>
      <div className="OurService" style={{height:'357px',display:'relative'}}>
        <div style={{position:'relative',top:'0',left:'0',backgroundSize: 'cover', backgroundPosition: 'center', background: '#105B4C',width:'screen',height:'289px'}}/>
        <div style={{position:'relative',top:'0'}}>eee</div>


      </div>


      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Our Latest Work</h1>
        <p>This is a simple home page.</p>
        <LatestWork ids={ids}/>
        {/* <Test/> */}
      </div>

      <div style={{height:'300px', alignItems: 'center',paddingTop:'14px',width:'screen',display:'flex',flexDirection: 'column',background: 'radial-gradient(174.55% 127.67% at 34.62% -1.46%, #FFF 0%, #DAFABC 58.72%, #3EDBA7 91.5%)'}}>
        <div style={{}}>Our Impact</div>
        <div>
          <div >12,000+</div>
          <div>indiv</div>
          <div>สร้างผล</div>
        </div>
      </div>

      <div style={{height:'fit', width:'screen',padding:'20px',fontSize:'30px',fontWeight:'700'}}>
        Intersting Articles
      </div>
      <div style={{width:'screen',height:'fit'}}>
        
      </div>
    </div>
    

    

  );
};

export default Home;
