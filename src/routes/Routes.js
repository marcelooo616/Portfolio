import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/static/Header";
import Error from "../pages/Error";
import Home from "../pages/Home";

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/> 
                    <Route path="/Home" element={<Home/>}/> 
                    



                    <Route path="*" element={<Error/>}/> 
                </Routes>
        </BrowserRouter>
    )
}