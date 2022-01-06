import React from "react";
import { valueFormatting } from "../../util/valueFormatting";
import { Container } from "./styles";

export const MobileTableEmployees = ({select}) => {
    
    
  return (
    <>
    {select && select.map(select => ( 
      <Container key={select.cpf}>
      <h2>{select.name}</h2>
      <div className="email-cpf">
        <div>
          <p className="type">Email</p>
          <p className="text">{select.email}</p>
        </div>
        <div>
          <p className="type">CPF</p>
          <p className="text">{select.cpf}</p>
        </div>
      </div>
      <div>
          <p className="type">bio</p>
          <p className="text">{select.bio}</p>
      </div>
      <div className="salary">
        <p className="type">SALÁRIO</p> 
        <span>{valueFormatting(select.salary,'money')}</span>
      </div>

    </Container>
    ))}
    
    </>
  );
};
