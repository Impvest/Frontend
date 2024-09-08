import React from "react";
import { Link } from "react-router-dom";
import LatestWorkCard from "../components/LastestWorkCard";
import LatestWork from "../components/LatestWork";
import LatestWorkIds from "../components/LatestWork";
import Test from "../components/test";
import Background from "../../public/images/homeBackground.svg";
import Amazon from "../../public/images/collaborators/amazon.svg";
import Kasikorn from "../../public/images/collaborators/kasikorn.svg";
import Fastwork from "../../public/images/collaborators/fastwork.svg";
import Sspp from "../../public/images/collaborators/sspp.svg";
import Sme from "../../public/images/collaborators/sme.svg";
import SmeBank from "../../public/images/collaborators/smeBank.svg";
import ThaiChamber from "../../public/images/collaborators/thaiChamber.svg";
import Bangkok from "../../public/images/collaborators/bangkok.svg";
import InterestingArticles from "../components/interestingArticles";
import OurServices from "../components/Ourservices";

// import logo from "../../pulic/images/impvestLogo.svg";
// public\images\homeBackground.svg
// public\images\homeBackground.svg

const Home = () => {
  const ids = [0, 1, 0, 0, 0, 0, 0, 0, 0];
  const art = [0, 1];
  return (
    <div>
      <div className="w-screen h-[622px] md:h-[850px]">
        <div className="Intro">
          <div className="pt-[186px] pl-6 pr-2.5 md:pl-[117px] md:pr-[60px] md:pt-[312px] lg:max-pl-[118px] lg:pr-[100px] lg:pt-[258px]">
            <div className="font-LineBold leading-[46px] md:leading-[56px] lg:leading-[93px] text-[32px] md:text-[44px] lg:text-[66px] pr-[70px]">
              <div className="hidden md:flex">
                <span className="text-greenImpvest">Impvest</span>{" "}
                พร้อมที่จะผลักดัน SME ไทยให้เติบโตอย่างยั่งยืน
              </div>
              <div className="md:hidden">
                <span className="text-greenImpvest">Impvest</span> พร้อมที่จะ
                <br />
                ผลักดัน SME ไทย
                <br />
                ให้เติบโตอย่างยั่งยืน
              </div>
            </div>
            <div className="hidden md:flex font-LineRg leading-[29px] lg:leading-[47px] text-xl lg:text-4xl mt-7 lg:mt-10 pr-[30px]">
              เรามีความมุ่งมั่นในการเสริมสร้างศักยภาพให้กับผู้ประกอบการไทย
              <br />
              และสนับสนุนให้ประสบความสำเร็จอย่างยั่งยืน <br />
              ผ่านการให้คำปรึกษา การมอบความรู้ และการสร้างนวัตกรรม
            </div>
            <div className="md:hidden font-LineRg leading-[29px] text-xl mt-7 pr-[30px]">
              ผ่านการให้คำปรึกษา การมอบความรู้
              <br />
              และการสร้างนวัตกรรม
            </div>
          </div>
        </div>
      </div>

      <OurServices />

      <div style={{ padding: "20px" }}>
        <div
          style={{ height: "48px", fontFamily: "LineBold", fontSize: "30px" }}
        >
          Our Latest Work
        </div>
        <LatestWork ids={ids} />
        {/* <Test/> */}
      </div>

      <div
        style={{
          padding: "20px",
          justifyContent: "center",
          justifyItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{ height: "48px", fontFamily: "LineBold", fontSize: "30px" }}
        >
          Our Collaborators
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            width: "100%",
            justifyItems: "center",
          }}
        >
          <a
            href="https://sponsor1.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Amazon} alt="Sponsor 1" />
          </a>
          <a
            href="https://sponsor2.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Kasikorn} alt="Sponsor 2" />
          </a>
          <a
            href="https://sponsor1.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Fastwork} alt="Sponsor 1" />
          </a>
          <a
            href="https://sponsor2.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Sspp} alt="Sponsor 2" />
          </a>
          <a
            href="https://sponsor1.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Sme} alt="Sponsor 1" />
          </a>
          <a
            href="https://sponsor2.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={SmeBank} alt="Sponsor 2" />
          </a>
          <a
            href="https://sponsor1.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ThaiChamber} alt="Sponsor 1" />
          </a>
          <a
            href="https://sponsor2.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Bangkok} alt="Sponsor 2" />
          </a>
        </div>
      </div>

      <div className="flex px-5 flex-col items-center w-screen pt-[14px] pb-[35px] text-[var(--green-color)] bg-[radial-gradient(174.55%_127.67%_at_34.62%_-1.46%,_#FFF_0%,_#DAFABC_58.72%,_#3EDBA7_91.5%)]">
        <div className="font-LineBold text-[30px] md:text-3xl lg:text-[66px]">
          Our Impact
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-[50px] md:gap-8 lg:gap-12 mt-5 lg:mt-12 w-[195px] md:w-screen lg:pt-11">
          <div className="flex flex-col md:w-[200px] lg:w-[390px] items-center justify-center">
            <div className="text-center leading-[50px] lg:leading-[110px] font-LineBold text-[50px] lg:text-[100px]">
              12,000+
            </div>
            <div className="text-center leading-[24px] lg:leading-10 mt-4 lg:mt-6 font-LineBold text-[24px] ">
              Community Members
            </div>
            <div className="text-center leading-[20px] lg:leading-[30px] mt-2 lg:mt-3 font-LineRg text-[16px]">
              สร้างผลกระทบให้คนไทย มากกว่า 12,000 ราย
            </div>
          </div>
          <div className="flex flex-col md:w-[200px] lg:w-[390px] items-center justify-center">
            <div className="text-center leading-[50px] lg:leading-[110px] font-LineBold text-[50px] lg:text-[100px]">
              300+
            </div>
            <div className="text-center leading-[24px] lg:leading-10 mt-4 lg:mt-6 font-LineBold text-[24px] ">
              Individuals Impacted
            </div>
            <div className="text-center leading-[20px] lg:leading-[30px] mt-2 lg:mt-3 font-LineRg text-[16px]">
              สร้างเครือข่ายเยาวชนไทย มากกว่า 300 ราย
            </div>
          </div>
          <div className="flex flex-col md:w-[200px] lg:w-[390px] items-center justify-center">
            <div className="text-center leading-[50px] lg:leading-[110px] font-LineBold text-[50px] lg:text-[100px]">
              20+
            </div>
            <div className="text-center leading-[24px] lg:leading-10 mt-4 lg:mt-6 font-LineBold text-[24px] ">
              Organizational Collaborations
            </div>
            <div className="text-center leading-[20px] lg:leading-[30px] mt-2 lg:mt-3 font-LineRg text-[16px]">
              ร่วมมือผลักดัน SME ไทย กับมากกว่า 20 องค์กร
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="h-[68px] w-screen pl-5 font-LineBold text-[30px] font-bold">
          Interesting Articles
        </div>
        <InterestingArticles ids={art} />
        <div className="flex items-center gap-2 bg-greenImpvest h-[40px] md:h-[75px] justify-end pr-5 md:pr-[60px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="89"
            height="16"
            viewBox="0 0 89 16"
            fill="none"
          >
            <path
              d="M88.7071 8.70711C89.0976 8.31659 89.0976 7.68343 88.7071 7.2929L82.3431 0.928939C81.9526 0.538415 81.3195 0.538415 80.9289 0.928939C80.5384 1.31946 80.5384 1.95263 80.9289 2.34315L86.5858 8.00001L80.9289 13.6569C80.5384 14.0474 80.5384 14.6806 80.9289 15.0711C81.3195 15.4616 81.9526 15.4616 82.3431 15.0711L88.7071 8.70711ZM-8.74228e-08 9L88 9.00001L88 7.00001L8.74228e-08 7L-8.74228e-08 9Z"
              fill="white"
            />
          </svg>
          <div className="text-[24px] md:text-3xl text-white">Read more</div>
        </div>
      </div>

      <div className="w-screen h-fit p-12 md:p-[92px] lg:p-[216px] flex flex-col items-center justify-center font-LineBold gap-5 bg-[radial-gradient(348.99%_89.18%_at_32.67%_41.52%,rgba(140,235,177,0.70)_8%,rgba(218,250,188,0.70)_77%,rgba(255,255,255,0.70)_100%)]">
        <div className="text-center text-[30px] md:text-[40px] lg:text-[64px] leading-[40px] font-lineBold">
          สนใจร่วมงานกับ Impvest
        </div>
        <div className="bg-greenImpvest text-white text-xl md:text-[32px] lg:text-4xl px-4 py-2 rounded-xl font-lineBold">
          ติดต่อเรา
        </div>
      </div>

      <div style={{ width: "screen", height: "fit" }}></div>
    </div>
  );
};

export default Home;
