import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Details from "./views/Details";
import Root from "./views/Root";
import Search from "./views/Search";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/favorites" />} />
          <Route path="/favorites" element={<Root />} />
          <Route path="/details/:uuid" element={<Details />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
