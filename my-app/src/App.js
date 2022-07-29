import React from "react";
import { Routes, Route, } from "react-router-dom";
import { AboutPages } from "./Pages/aboutPages";
import { ContactPages } from "./Pages/contactPages";
import { ErrorPages } from "./Pages/errorPages";
import { HomePages } from "./Pages/homePages";


function App() {
  return (
 
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="about" element={<AboutPages />} />
        <Route path="contact" element={<ContactPages />} />
        <Route path="*" element={<ErrorPages />} />
      </Routes>
  

  );
}

export default App;
