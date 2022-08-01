import React from "react";
import { Routes, Route, } from "react-router-dom";
import { BmiCalculatorPages } from "./Pages";
import { AboutPages } from "./Pages/aboutPages";
import { ContactPages } from "./Pages/contactPages";
import { ErrorPages } from "./Pages/errorPages";
import { HomePages } from "./Pages/homePages";
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="about" element={<AboutPages />} />
        <Route path="contact" element={<ContactPages />} />
        <Route path="bmi-calculator" element={<BmiCalculatorPages />} />
        <Route path="*" element={<ErrorPages />} />
      </Routes>
    </>

  );
}

export default App;
