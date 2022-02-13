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


/* function PrivateRoute({ component: Component, ...rest }) {
    const {usuario, loading} = useAuth() 
    
    return (    
        <Route
            {...rest }
            render={props => {
              usuario ? <Component {...props} /> : <Navigate to="/" />
            }}
        /> 
    )
};

export default PrivateRoute; */