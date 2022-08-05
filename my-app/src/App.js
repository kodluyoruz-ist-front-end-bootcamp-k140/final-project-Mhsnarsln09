
import { Routes, Route, } from "react-router-dom";
import { BmiCalculatorPages } from "./Pages";
import { AboutPages } from "./Pages/aboutPages";
import { ContactPages } from "./Pages/contactPages";
import { ErrorPages } from "./Pages/errorPages";
import { UserHomePages } from "./Pages/userHomePages";
import { Toaster } from 'react-hot-toast';
import { LoginPage } from "./Pages/loginPage";
import { RegisterPage } from "./Pages/registerPage";


function App() {

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/"  element={<UserHomePages />}> 
        </Route>
        <Route path="signup" element={<RegisterPage/>} />
        <Route path="login" element={<LoginPage/>} />
        <Route path="user-home" element={<UserHomePages />} />
        <Route path="about" element={<AboutPages />} />
        <Route path="contact" element={<ContactPages />} />
        <Route path="bmi-calculator" element={<BmiCalculatorPages />} />
        <Route path="*" element={<ErrorPages />} />
        
      </Routes>
    </>

  );
}

export default App;
