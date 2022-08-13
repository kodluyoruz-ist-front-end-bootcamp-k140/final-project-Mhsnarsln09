
import { BmiCalculatorPages, UserHomeLayout } from "./Pages";
import { AboutPages } from "./Pages/aboutPages";
import { ContactPages } from "./Pages/contactPages";
import { ErrorPages } from "./Pages/errorPages";
import { HomePages } from "./Pages/homePage";
import { LoginPage } from "./Pages/loginPage";
import { RegisterPage } from "./Pages/registerPage";
import { AuthLayout } from "./Pages/authLayout";
import { NutritionistPage } from "./Pages/nutritionistPage";
import { PrivateRoute} from "./components/privateRoute"
import { Training } from "./Pages/trainingPage";
import MyDietPlanPage from "./Pages/myDietPlanPage";


const routes = [
    {
    path: "/",
    element: <UserHomeLayout />,
    children:[
        {
            index : true,
            element: <HomePages />
        },
        {
            path:"about",
            element: <AboutPages />
        },
        {
            path:"contact",
            element: <ContactPages />
        },
        {
            path:"bmi-calculator",
            element: <BmiCalculatorPages />
        },
        {
            path:"nutritionist",
            element:<NutritionistPage/>,
            auth:true
        },
        {
            path:"training",
            element:<Training/>,
            auth:true
        },
        {
            path:"my-diet-plan",
            element:<MyDietPlanPage/>,
            auth:true
        }
]
},
{
    path:"/auth",
    element: <AuthLayout/>,
    children:[
        {
            path:"signup",
            element: <RegisterPage/>
        },
        {
            path:"login",
            element: <LoginPage/>
        }
    ]
},
{
    path:"*",
    element: <ErrorPages />
}
]

const authMap = routes => routes.map(route =>{
    if(route?.auth){
        route.element = <PrivateRoute >{route.element}</PrivateRoute>    }
        if(route?.children){
            route.children = authMap(route.children)
        }
      
            return route
        
})

export default authMap(routes)