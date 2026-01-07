import { useParams, Link } from "react-router-dom";
import { CourseContextData } from "../Contexts/CourseContext";
import { useContext } from "react";

const CourseDetail = () => {
  const { id } = useParams();
  // console.log()
  const { course } = useContext(CourseContextData);

  const selectedCourse = course.find((c) => c.id === id);

  if (!selectedCourse) {
    return <p className="text-center mt-10">Course not found</p>;
  }

  return (
    <div className="mt-10 max-w-xl mx-auto bg-emerald-300 text-emerald-950 p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">{selectedCourse.title}</h2>

      <p className="mb-6">{selectedCourse.description}</p>

      <Link to="/courses" className="text-emerald-700 font-semibold">
        ← Back to Courses
      </Link>
    </div>
  );
};

export default CourseDetail;
