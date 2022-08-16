import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./App.Routes";

export function Routes(){
    return(
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    )
}