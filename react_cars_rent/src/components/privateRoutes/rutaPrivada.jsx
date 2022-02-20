import { useAuth } from "../context/authContext";
import { Navigate, useLocation} from "react-router-dom";


/* FALTA CORREGIR LA DIRECCIÓN DEL LOGOUT QUE VAYA A HOME Y NO A LOGIN */

const Privada = ({children}) => {
    //let location = useLocation();
    const {usuario, isAthenticated,loading} = useAuth();
        /* if (loading) { <h1>LOADING</h1>  } */
        if (!isAthenticated && usuario == null  ) {
            return <Navigate  to="/login" /* state={{ location }} */ /* replace */ />             
        }
    return children
};  

export default Privada;