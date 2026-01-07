import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import CourseContext from "./Contexts/CourseContext.jsx";

createRoot(document.getElementById("root")).render(
  <CourseContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CourseContext>
);
