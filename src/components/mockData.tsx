interface LatestWorkData {
  index: number;
  topic: string;
  picturePath: string;
  detail: string;
  departmentId: number;
}

export interface Article {
  index: number;
  topic: string;
  picturePath: string;
  date: string;
}


const departments = ["Innovation", "Academy", "Consulting"];

const mockData: LatestWorkData[] = [
  {
    index: 0,
    topic: "Amazon SME Workshop",
    picturePath: "../../public/images/latestWork1.svg",
    detail: "พาร์ทเนอร์กับ Amazon ร่วมจัดงานเวิร์คชอปภายใต้หัวข้อ Product Selection Workshop สำหรับผู้ประกอบการกว่า 70 ท่าน.",
    departmentId: 0 // Corresponds to "Innovation"
  },
  {
    index: 1,
    topic: "Amazon SME Workshop",
    picturePath: "../../public/images/latestWork1.svg",
    detail: "พาร์ทเนอร์กับ Amazon ร่วมจัดงานเวิร์คชอปภายใต้หัวข้อ Product Selection Workshop สำหรับผู้ประกอบการกว่า 70 ท่าน",
    departmentId: 0 // Corresponds to "Innovation"
  },
  {
    index: 2,
    topic: "Node.js for Beginners",
    picturePath: "../../public/images/latestWork1.svg",
    detail: "Introduction to server-side programming with Node.js.",
    departmentId: 2 // Corresponds to "Consulting"
  },
  {
    index: 3,
    topic: "Introduction to GraphQL",
    picturePath: "../../public/images/latestWork1.svg",
    detail: "An overview of GraphQL, a query language for your API.",
    departmentId: 2 // Corresponds to "Consulting"
  }
];

const mockArticle: Article[] = [
  {
    index: 0,
    topic:"Join our Amazon SMEs Workshop",
    picturePath: "../../public/images/latestWork1.svg",
    date: "July 23, 2024"
  },
  {
    index: 1,
    topic:"How to Partnership",
    picturePath: "../../public/images/latestWork1.svg",
    date: "July 23, 2024"
  }
]

const dataMap = new Map<number, LatestWorkData>(
  mockData.map(item => [item.index, item])
);

export function getDataByIndex(index: number): LatestWorkData | undefined {
  return dataMap.get(index);
}

const articleMap = new Map<number, Article>(
  mockArticle.map(item => [item.index, item])
);

export function getArticleByIndex(index: number): Article | undefined {
  return articleMap.get(index);
}

export default mockData;
