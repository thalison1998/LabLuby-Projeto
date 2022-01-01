
import React from "react";
import { valueFormatting } from "../../util/valueFormatting";
import { Container, Status } from "./styles";

export const MobileTable = ({select}) => {
  
  return (
     <>{select && select.map(prop => (
      <Container key={prop.chassi}>
      <Status>{prop.status}</Status>
      <div className="wrapper-flex model-value">
        <span>{prop.brand} {prop.model}, {prop.yer}</span>
        <span className="color-red">{valueFormatting(prop.value,'money')}</span>
      </div>
      <div className="wrapper-flex types ">
        <span>
          <span className="type">COR</span> 
          {prop.color}
        </span>
        <span>
          <span className="type">KM</span> {valueFormatting(prop.km,'km')}
        </span>
        <span>
          <span className="type">CHASSI </span> 9BW
        </span>
      </div>
    </Container> 
     ))}
     
     </>
   
  );
};
