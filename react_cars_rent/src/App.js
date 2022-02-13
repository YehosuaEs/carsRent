import './App.css';
import { Fragment } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/pages/home';
import Login from "./components/pages/login";
import Signup from "./components/pages/signup"
import RentaCars from  "./components/pages/rentCars"
import Contact from "./components/pages/contact"
import NotFound from "./components/pages/notFound"
import NavBar from "./components/navBar/navBar";
import PrivateRoute from './components/privateRoutes/privateRoute';
import {useAuth} from "./components/context/authContext"



function App() {
/* const {usuario} = useAuth();

{usuario && <>
  <Route path="/rentaCars" element={ <RentaCars />} />
  <Route path="/contact" element={  <Contact /> } />
</>} */

  return (
    <Fragment>
      <Router>
          <NavBar />
          <Routes>

            <Route path="/" element={  <Home /> } />

            <Route  path="/login" element={<Login/> } />
            
            <Route  path="/signup" element={<Signup/> } />
           
            <Route  path="/*" element={<NotFound />}></Route>

            <Route path="/renta" element={ <PrivateRoute> <RentaCars /> </PrivateRoute>} />
            
            <Route path="/contact" element={  <Contact /> } />

          </Routes>
      </Router>
    </Fragment>
  );
}

export default App;


         

          
           
      

         