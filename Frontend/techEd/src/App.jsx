import React from "react";
import About from "./components/about/About";
import { Route, Routes } from "react-router-dom";
import Homecomponents from "./components/Home/Homecomponents";
import Contect from "./components/contact/Contect";
import Languages from "./components/languages/Languages";
import SignUp from "./components/signUp/SignUp";

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white ">
        <Routes>
          <Route path="/" element={<Homecomponents />} />
          <Route path="/about" element={<About />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
