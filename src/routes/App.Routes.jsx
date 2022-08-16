import { Route, Routes } from "react-router-dom";
import { Empresa } from "../pages/Empresa";
import { App } from "../pages/Home/App";

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={ <App/> }/> 
            <Route path='/empresa' element={ <Empresa/> }/>
        </Routes>
    )
}