import React from "react";
import { useAuth } from "../../../context/AuthProvider/useAuth";
import { useFetch } from "../../../hooks/useFetch";
import { getAll } from "../../../service/api";
import { ControlIndex } from "../../controlIndex";
import { Header } from "../../header";
import { List, Table } from "../totalVehicles/styles";
import { Container, ContainerTable, Main, Wrapper } from "./styles";
import useMediaResize from "../../../hooks/useMediaResize"
import {MobileTable }from '../../mobileTable'
import Head from "../../helper/head";
import { Loading } from "../../helper/loading";

export const ReservedAndSold = () => {
  const { token } = useAuth();
  const mobile = useMediaResize('(max-width:920px)')
  const { info, request,  loading} = useFetch();
  const [select, setSelect] = React.useState([]);
  const [pageNumber, setPageNumber] = React.useState(1);

  const filterStatus = (dataFilter) => {
    const itemFilter = dataFilter.filter(
      (item) =>
        item.status.includes("Vendido") || item.status.includes("Reservado")
    );
    setSelect(itemFilter);
  };

  React.useEffect(() => {
    if (token) {
      (async () => {
        const { url, options } = getAll(token, "vehicles");
        const { response } = await request(
          url + `?page=${pageNumber}`,
          options
        );
        if (response.data.vehicles !== undefined) {
          const responseFilter = response.data.vehicles;
          filterStatus(responseFilter);
        } else {
          setSelect([]);
        }
      })();
    }
  }, [token, request, pageNumber]);

  const handleOnchange = ({ target }) => {
    if (info.vehicles !== undefined) {
      const filt = info.vehicles.filter((item) =>
        item.model.includes(target.value)
      );
      filterStatus(filt);
    }
  };
 
   


{/* <Loading />  */}

  return (
    <>
      <Header titleHead="Seus Veículos" />
      <Head
        title="Veículos reservados e vendidos"
        description="Home do site Dogs, com o feed de fotos."
       />
      <Main>
        <Container>
          {!mobile && <h1>Seus Veículos</h1>}
          <ContainerTable>
            <Wrapper>
              <h2>Listagem de veículos reservados e vendidos</h2>
              <ControlIndex
                setPageNumber={setPageNumber}
                onChange={handleOnchange}
                info={info}
                pageNumber={pageNumber}
              />
            </Wrapper>
          {loading ? <Loading/>:
          <>
           {!mobile ?<Table>
              <ul className="head-table">
                <li>marca</li>
                <li>modelo</li>
                <li className="center">ano</li>
                <li>km</li>
                <li>cor</li>
                <li className="center">status</li>
                <li>chassi</li>
                <li>valor</li>
              </ul>
              <ul>
                {select &&
                  select.map(
                    ({
                      chassi,
                      brand,
                      color,
                      km,
                      model,
                      status,
                      value,
                      yer,
                    }) => (
                      <div key={chassi} className="wrapper-table">
                        <List>{brand}</List>
                        <List>{model}</List>
                        <List className="center">{yer}</List>
                        <List>{km}</List>
                        <List>{color}</List>
                        <List className="center bg-red">{status}</List>
                        <List>{chassi.slice(0, 3)}</List>
                        <List>
                          {new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          }).format(value)}
                        </List>
                      </div>
                    )
                  )}
              </ul>
            </Table> : <MobileTable select={select}/>}
            </> } 
          </ContainerTable>
        </Container>
      </Main>
    </>
  );
};
