import React from "react";
import { useAuth } from "../../../context/AuthProvider/useAuth";
import { useFetch } from "../../../hooks/useFetch";
import { getAll } from "../../../service/api";
import { ControlIndex } from "../../controlIndex";
import { Header } from "../../header";
import { MobileTable } from "../../mobileTable";
import useMediaResize from "../../../hooks/useMediaResize"
import {
  Container,
  Main,
  ContainerTable,
  Wrapper,
  Table,
  List,
} from "./styles";

export const TotalVehicles = () => {
  const { token } = useAuth();
  const mobile = useMediaResize('(max-width:920px)')
  console.log(mobile)
  const { info, request, loading, error } = useFetch();
  const [select, setSelect] = React.useState([]);
  const [pageNumber, setPageNumber] = React.useState(1);

  React.useEffect(() => {
    if (token) {
      (async () => {
        const { url, options } = getAll(token, "vehicles");
        const { response } = await request(
          url + `?page=${pageNumber}`,
          options
        );
        setSelect(response.data.vehicles);
      })();
    }
  }, [token, request, pageNumber]);

  const handleOnchange = ({ target }) => {
    const filt = info.vehicles.filter((item) =>
      item.model.includes(target.value)
    );
    setSelect(filt);
  };

  return (
    <>
      <Header titleHead="todos Veículos" />
      <Main>
        <Container>
         {!mobile && <h1>Todos Veículos</h1>}
          <ContainerTable>
            <Wrapper>
              <h2>Listagem geral de veículos</h2>
              <ControlIndex
                setPageNumber={setPageNumber}
                onChange={handleOnchange}
                info={info}
                pageNumber={pageNumber}
              />
            </Wrapper>

            {!mobile ? <Table>
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
            </Table>  : <MobileTable select={select}/>}
            
          </ContainerTable>
        </Container>
      </Main>
    </>
  );
};
