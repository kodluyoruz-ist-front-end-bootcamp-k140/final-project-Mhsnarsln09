
import { Routes, Route, } from "react-router-dom";
import { BmiCalculatorPages } from "./Pages";
import { AboutPages } from "./Pages/aboutPages";
import { ContactPages } from "./Pages/contactPages";
import { ErrorPages } from "./Pages/errorPages";
import { UserHomePages } from "./Pages/userHomePages";
import { Toaster } from 'react-hot-toast';
import { LoginPage } from "./Pages/loginPage";
import { RegisterPage } from "./Pages/registerPage";
import { AuthLayout } from "./Pages/authLayout";
import { NutritionistPage } from "./Pages/nutritionistPage";


function App() {

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/"  element={<UserHomePages />}/> 
        <Route path="user-home" element={<UserHomePages />} />
        <Route path="about" element={<AboutPages />} />
        <Route path="contact" element={<ContactPages />} />
        <Route path="bmi-calculator" element={<BmiCalculatorPages />} />
        <Route path="nutritionist" element={<NutritionistPage/>}/>
        <Route path="*" element={<ErrorPages />} />
        
        <Route path="auth"  element={<AuthLayout/>}>
          <Route path="signup" index={true} element={<RegisterPage/>} />
          <Route path="login" element={<LoginPage/>} />

        </Route>
      
      </Routes>
    </>

  );
}

export default App;
