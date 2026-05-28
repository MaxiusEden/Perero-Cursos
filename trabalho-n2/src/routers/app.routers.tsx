import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { CourseDetails } from "../pages/CourseDetails";
import { Login } from "../pages/Login";
import { Trilhas } from "../pages/Trilhas";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/curso/:id" element={<CourseDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/trilhas" element={<Trilhas />} />
    </Routes>
  );
};
