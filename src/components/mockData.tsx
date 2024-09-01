interface LatestWorkData {
  index: number;
  topic: string;
  picturePath: string;
  detail: string;
  departmentId: number;
}

const departments = ["Innovation", "Academy", "Consulting"];

const mockData: LatestWorkData[] = [
  {
    index: 0,
    topic: "React Basics",
    picturePath: "../../public/images/latestWork1.svg",
    detail: "Learn the fundamentals of React, including components, state, and props.",
    departmentId: 0 // Corresponds to "Innovation"
  },
  {
    index: 1,
    topic: "Advanced CSS",
    picturePath: "../../public/images/latestWork1.svg",
    detail: "Deep dive into advanced CSS techniques, including Flexbox and Grid.",
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

const dataMap = new Map<number, LatestWorkData>(
  mockData.map(item => [item.index, item])
);

export function getDataByIndex(index: number): LatestWorkData | undefined {
  return dataMap.get(index);
}

export default mockData;
