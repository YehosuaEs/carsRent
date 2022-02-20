import './App.css';
import { Fragment } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/pages/home';
import Login from "./components/pages/login";
import Signup from "./components/pages/signup"
import RentaCars from  "./components/pages/rentCars"
import Contact from "./components/pages/contact"
import NotFound from "./components/pages/notFound"
import Privada from "./components/privateRoutes/rutaPrivada"

function App() {

  return (
    <Fragment>    

        <Router>
            <Routes>
              <Route path="/" element={  <Home /> } />
{/* ------------------------------------------------------------------------------ */}
              <Route path="/renta" element={ <Privada><RentaCars /> </Privada>} />           
{/* ------------------------------------------------------------------------------ */}
              <Route path="/contact" element={  <Contact />  } /> 
              <Route  path="/signup" element={<Signup/> } />
              <Route  path="/login" element={<Login/> } />
              <Route  path="/*" element={<NotFound />}></Route>
            </Routes>
        </Router>

    </Fragment>
  );
}

export default App;


         

          
           
      

         