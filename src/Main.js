import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import App from "./App";

function Main(){
    return(
        <>
        <Routes>
            <Route path="/" element={<App/>}>
              <Route path="/login" element={<Login/>}/>
            </Route>
            <Route/>
        </Routes>
        </>
    )
}

export default Main;