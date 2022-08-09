import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
export function PrivateRoute({children}){

    const { user } = useSelector(state => state.auth)
   const location = useLocation()

    if(!user){
        return <Navigate to="/auth/login" state={{
            return_url: location.pathname
        }}/>
    } else {
    return children}
}