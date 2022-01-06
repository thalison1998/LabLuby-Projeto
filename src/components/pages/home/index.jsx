import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthProvider/useAuth";
import frameCar1 from "../../../assets/frame-car1.jpg";
import frameCar2 from "../../../assets/frame-car2.jpg";
import employeesImg from "../../../assets/client.jpg";

import frameCarMobile1 from "../../../assets/car-mobile-1.jpg";
import frameCarMobile2 from "../../../assets/car-mobile-2.jpg";
import employeesMobileImg from "../../../assets/employee-mobile.jpg";

import { Header } from "../../header/index";
import { Container, SectionHome, Nav } from "./styles";

export const Home = () => {
  const { data } = useAuth();

  
  return (
    <>
      <Header search={true} titleHead="Home" />
      <Container>
        <SectionHome>
          <h1>Bem-vindo, {data && data.user.name}</h1>
          <p>Menu</p>

          <Nav>
            <Link to="veiculosVendidos&Reservados" className="item-menu">
              <div className="wrapper">
                <div>
                  <h2>Veículos reservados e vendidos </h2>
                  <p>Veículos reservados e vendidos por você</p>
                </div>
                {data && <span>{data.totalVehiclesLoggedUser} Veículos</span>}
              </div>
              <picture>
                <source media="(max-width:660px )" srcSet={frameCarMobile1} />
                <img src={frameCar1} alt="Imagem de carro número 1" />
              </picture>
            </Link>

            <Link to="veiculosTotais" className="item-menu">
              <div className="wrapper">
                <div>
                  <h2>Listagem geral de veículos</h2>
                  <p>Listagem de veículos de toda a empresa</p>
                </div>
                {data && <span>{data.totalVehicles} Veículos</span>}
              </div>
              <picture>
                <source media="(max-width:660px )" srcSet={frameCarMobile2} />
                <img src={frameCar2} alt="Imagem de carro número 2" />
              </picture>
            </Link>

            <Link to="funcionarios" className="item-menu">
              <div className="wrapper">
                <div>
                  <h2>Funcionários da empresa</h2>
                  <p>Listagem de todos os funcionários da empresa</p>
                </div>
                {data && <span>{data.totalEmployees} Veículos</span>}
              </div>
              <picture>
                <source
                  media="(max-width:660px )"
                  srcSet={employeesMobileImg}
                />
                <img src={employeesImg} alt="Imagem de funcionario" />
              </picture>
            </Link>
          </Nav>
        </SectionHome>
      </Container>
    </>
  );
};
