import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthProvider/useAuth";
import frameCar1 from "../../../assets/frame-car1.jpg";
import frameCar2 from "../../../assets/frame-car2.jpg";
import employeesImg from "../../../assets/client.jpg";

import { Header } from "../../header/index";
import { Container, SectionHome, Nav} from "./styles";

export const Home = () => {
  const { data, loading } = useAuth();
  console.log(data);

  return (
    <>
      <Header search={true} />
      <Container>
        {loading ? <p>Carregando...</p>: <SectionHome>
          
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
              <img src={frameCar1} alt="Imagem de carro número 1" />
            </Link>

            <Link to="veiculosTotais" className="item-menu">
              <div className="wrapper">
                    <div>
                    <h2>Listagem geral de veículos</h2>
                    <p>Listagem de veículos de toda a empresa</p>
            
                    </div>
                {data && <span>{data.totalVehicles} Veículos</span>}
              </div>
              <img src={frameCar2} alt="Imagem de carro número 2" />
            </Link>

            <Link to="x" className="item-menu">
              <div className="wrapper">
                <div>
                    <h2>Funcionários da empresa</h2>
                    <p>Listagem de todos os funcionários da empresa</p>
                </div>
                {data && <span>{data.totalEmployees} Veículos</span>}
              </div>
              <img src={employeesImg} alt="Imagem de funcionario" />
            </Link>
          </Nav>
        </SectionHome>}
        
      </Container>
    </>
  );
};
