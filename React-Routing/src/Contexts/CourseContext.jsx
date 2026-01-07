import { createContext, useState } from "react";

export const CourseContextData = createContext();

const CourseContext = ({children}) => {
  const [course, setCourse] = useState([
    {
      id: "js",
      title: "JavaScript Deep Dive",
      description: "Learn JS from fundamentals to advanced concepts.",
    },
    {
      id: "react",
      title: "React Mastery",
      description: "Build modern React applications.",
    },
    {
      id: "node",
      title: "Node js Expert",
      description: "Advance Backend mastering routing.",
    },
  ]);

  return <CourseContextData.Provider value={{course,setCourse}}>{children}</CourseContextData.Provider>;
};

export default CourseContext;
