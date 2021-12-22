import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectLayout } from "./components/protectedRoute";
import Login from "./components/pages/login/index.jsx";
import { GlobalStyles } from "./styles/global";
import { AuthProvider } from "./context/AuthProvider";
import { LoginSaveProvider } from "./context/loginSave";

import { Home } from "./components/pages/home";
import { TotalVehicles } from "./components/pages/totalVehicles";
import { ReservedAndSold } from "./components/pages/reservedAndSold";
import { Employees } from "./components/pages/employees";
export const  App = () => {

  
  return (
      <BrowserRouter>
       <AuthProvider>
     
         <LoginSaveProvider>
          <Routes>
          <Route path="LabLuby-Projeto/Home" element={<ProtectLayout ProtectComponent={<Home />}/>} />
          
          <Route path="LabLuby-Projeto/Home/veiculosTotais" element={<ProtectLayout 
          ProtectComponent={<TotalVehicles />}/>} />

          <Route path="LabLuby-Projeto/Home/veiculosVendidos&Reservados" element={<ProtectLayout 
          ProtectComponent={<ReservedAndSold/>}/>} />

          <Route path="LabLuby-Projeto/Home/funcionarios" element={<ProtectLayout 
          ProtectComponent={<Employees/>}/>} />

          <Route path="/LabLuby-Projeto"   element={<Login />} end />
        </Routes>
        </LoginSaveProvider>
        </AuthProvider>
        <GlobalStyles/>
      </BrowserRouter>
  );
}


