import React from "react";
import { useAuth } from "../../../context/AuthProvider/useAuth";
import { useFetch } from "../../../hooks/useFetch";
import useMediaResize from "../../../hooks/useMediaResize";
import { getAll } from "../../../service/api";
import { ControlIndex } from "../../controlIndex";
import { Header } from "../../header";
import Head from "../../helper/head";
import { MobileTableEmployees } from "../../mobileTableEmployees/index.jsx";
import { Table } from "../totalVehicles/styles";
import {Loading} from "../../helper/loading"
import {
  Container,
  ContainerTable,
  ListEmployees,
  Main,
  Wrapper,
} from "./styles";

export const Employees = () => {
  const { token } = useAuth();
  const mobile = useMediaResize("(max-width:920px)");
  const { info, request, loading } = useFetch();
  const [select, setSelect] = React.useState([]);
  const [pageNumber, setPageNumber] = React.useState(1);

  React.useEffect(() => {
    if (token) {
      (async () => {
        const { url, options } = getAll(token, "employees");
        const { response } = await request(
          url + `?page=${pageNumber}`,
          options
        );
        const dataEmployees = response.data.employees;
        setSelect(dataEmployees);
      })();
    }
  }, [token, request, pageNumber]);

  const handleOnchange = ({ target }) => {
    const filt = info.employees.filter((item) => {
      return item.name.toUpperCase().includes(target.value.toUpperCase());
    });
    setSelect(filt);
  };

 
  
  return (
    <>
      <Header titleHead="funcionários" />
      <Head
        title="Funcionários"
        description="Home do site Dogs, com o feed de fotos."
      />
      <Main>
        <Container>
          <h1>Funcionários</h1>
          <ContainerTable>
            <Wrapper>
              <h2>Listagem de funcionários da empresa</h2>
              <ControlIndex
                setPageNumber={setPageNumber}
                onChange={handleOnchange}
                info={info}
                pageNumber={pageNumber}
              />
            </Wrapper>
            {loading ?<Loading />:
              <>{!mobile ? (
              <Table>
                <ul className="head-table-employees">
                  <li>Nome</li>
                  <li>email</li>
                  <li>cpf</li>
                  <li>valor</li>
                  <li>bio</li>
                </ul>
                <ul>
                  {select &&
                    select.map(({ name, cpf, email, salary, bio }) => (
                      <div key={cpf} className="wrapper-table-employees">
                        <ListEmployees>{name}</ListEmployees>
                        <ListEmployees>{email}</ListEmployees>
                        <ListEmployees>{cpf}</ListEmployees>
                        <ListEmployees>
                          {new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          }).format(salary)}
                        </ListEmployees>
                        <ListEmployees>{bio}</ListEmployees>
                      </div>
                    ))}
                </ul>
              </Table>
            ) : (
              <MobileTableEmployees select={select} />
            )}</>}
           
          </ContainerTable>
        </Container>
      </Main>
    </>
  );
};
