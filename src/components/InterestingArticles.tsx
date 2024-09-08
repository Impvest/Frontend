import React from "react";
import "../styles/global.css";
import { getArticleByIndex, Article } from "./mockData";
import amazonArticle from "../../public/images/interestArticle.svg";

interface ShowArticles {
  ids: number[];
}

const InterestingArticles: React.FC<ShowArticles> = ({ ids }) => {
  const articles: Article[] = [];
  ids.forEach((index) => {
    const temp = getArticleByIndex(index);
    if (temp) {
      articles.push(temp);
    }
  });

  return (
    // <div className="block h-fit">
    //   <div
    //     className="article-container aspect-square w-screen"
    //     style={{
    //       backgroundImage: `url(${amazonArticle})`,
    //       backgroundSize: 'cover',
    //       backgroundPosition: 'center',
    //       backgroundRepeat: 'no-repeat',
    //     }}
    //   >
    //     <div className="article-text">
    //       July 23, 2024
    //     </div>
    //     <div className="font-LineBold text-4xl leading-9 mt-2.5 md:mt-5">
    //       Join our Amazon SMEs Workshop
    //     </div>
    //   </div>

    //   <div className="flex w-full">
    //     <div className="article-container w-1/2">
    //       <div className="article-text">
    //         {articles[1].date}
    //       </div>
    //       <div className="article-heading">
    //         {articles[1].topic}
    //       </div>
    //     </div>
    //     <img src={amazonArticle} alt="Amazon Workshop" className="w-1/2"/>
    //   </div>

    //   <div className="flex w-full">
    //     <img src={amazonArticle} alt="Amazon Workshop" className="w-1/2"/>
    //     <div
    //       className="article-container w-1/2"
    //       style={{ backgroundColor: '#DAFABC' }}
    //     >
    //       <div className="article-text">
    //         {articles[1].date}
    //       </div>
    //       <div className="article-heading">
    //         {articles[1].topic}
    //       </div>
    //     </div>
    //   </div>

    //   <div className="flex w-full">
    //     <div className="article-container w-1/2">
    //       <div className="article-text">
    //         {articles[1].date}
    //       </div>
    //       <div className="article-heading">
    //         {articles[1].topic}
    //       </div>
    //     </div>
    //     <img src={amazonArticle} alt="Amazon Workshop" className="w-1/2"/>
    //   </div>

    //   <div className="flex w-full">
    //     <img src={amazonArticle} alt="Amazon Workshop" className="w-1/2"/>
    //     <div
    //       className="article-container w-1/2"
    //       style={{ backgroundColor: '#DAFABC' }}
    //     >
    //       <div className="article-text">
    //         {articles[1].date}
    //       </div>
    //       <div className="article-heading">
    //         {articles[1].topic}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="block w-screen">
      <div className="w-screen aspect-square flex">
        {/* Left Half: Large Square */}
        <div
          className="article-container w-1/2 bg-greenImpvest h-max"
          style={{
            backgroundImage: `url(${amazonArticle})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="article-text">July 23, 2024</div>
          <div className="font-LineBold text-4xl leading-9 mt-2.5 md:mt-5">
            Join our Amazon SMEs Workshop
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col">
          <div className="flex flex-row w-full h-1/2">
            <div className="w-1/2 bg-white aspect-square justify-end p-5 h-max mt-auto">
              <div className="article-text">{articles[1].date}</div>
              <div className="article-heading">{articles[1].topic}</div>
            </div>
            <div className="w-1/2 h-full bg-gray-200 aspect-square">
              <img
                src={amazonArticle}
                alt="Amazon Workshop"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex flex-row w-full h-max">
            <div className="w-1/2 h-full bg-yellow-200 aspect-square">
              <img
                src={amazonArticle}
                alt="Amazon Workshop"
                className="w-full"
              />{" "}
            </div>
            <div className="w-1/2 h-full bg-greenImpvest aspect-square justify-end p-5 mt-auto">
              <div className="article-text">{articles[1].date}</div>
              <div className="article-heading">{articles[1].topic}</div>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-fit">
        <div className="w-1/4 h-full bg-greenImpvest aspect-square justify-end p-5 mt-auto">
          <div className="article-text">{articles[1].date}</div>
          <div className="article-heading">{articles[1].topic}</div>{" "}
        </div>
        <div className="w-1/4 aspect-square">
          {" "}
          <img
            src={amazonArticle}
            alt="Amazon Workshop"
            className="w-full"
          />{" "}
        </div>

        <div className="w-1/4 aspect-square">
          <div className="w-1/4 h-full bg-greenImpvest aspect-square justify-end p-5 mt-auto">
            <div className="article-text">{articles[1].date}</div>
            <div className="article-heading">{articles[1].topic}</div>{" "}
          </div>
        </div>

        <div className="w-1/4 aspect-square">
          {" "}
          <img
            src={amazonArticle}
            alt="Amazon Workshop"
            className="w-full"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default InterestingArticles;
