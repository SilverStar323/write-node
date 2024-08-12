import { Routes, Route } from "react-router-dom";
import { CreatePost, Home, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
