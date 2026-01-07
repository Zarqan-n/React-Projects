import { Link } from "react-router-dom";

const courses = [
  { id: "js", name: "JavaScript" },
  { id: "react", name: "React" },
  { id: "node", name: "Node.js" },
];

const Courses = () => {
  return (
    <div className="text-center py-8">
      <h1 className="text-2xl font-bold mb-6">Courses</h1>
      <p className="mb-5">Below option will create dynamic url</p>

      <div className="flex justify-center gap-4">
        {courses.map(course => (
          <Link
            key={course.id}
            to={`/courses/${course.id}`}
            className="px-4 py-2 bg-emerald-400 text-emerald-900 font-bold rounded"
          >
            {course.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;
