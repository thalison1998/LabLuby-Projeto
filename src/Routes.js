import React from 'react'
import {  Route, Routes } from "react-router-dom";
import { ProtectLayout } from "./components/protectedRoute";
import Login from "./components/pages/login/index.jsx";
import { Home } from "./components/pages/home";
import { TotalVehicles } from "./components/pages/totalVehicles";
import { ReservedAndSold } from "./components/pages/reservedAndSold";
import { Employees } from "./components/pages/employees";
import { NotFound } from "./components/helper/notFound";

export const ContainerRoutes = () => {
    return (
        <Routes>
        <Route
          path="Home"
          element={<ProtectLayout ProtectComponent={<Home />} />}
        />

        <Route
          path="Home/veiculosTotais"
          element={<ProtectLayout ProtectComponent={<TotalVehicles />} />}
        />

        <Route
          path="Home/veiculosVendidos&Reservados"
          element={<ProtectLayout ProtectComponent={<ReservedAndSold />} />}
        />

        <Route
          path="Home/funcionarios"
          element={<ProtectLayout ProtectComponent={<Employees />} />}
        />

        <Route path="/" element={<Login />} end />
        <Route path="*" element={<NotFound />} />
      </Routes>
    )
}
