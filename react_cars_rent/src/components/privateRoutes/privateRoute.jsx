import { useAuth } from "../context/authContext";
import { Navigate, Route } from "react-router-dom";


function PrivateRoute({ children }) {
    const {usuario, loading} = useAuth() 
    if (loading) { <h1>LOADING</h1>  }
    if (!usuario) { <Navigate to="/login" />}
    return (    
        <> 
            {children}
        </> 
    )
};
export default PrivateRoute;

