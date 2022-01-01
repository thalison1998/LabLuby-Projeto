import styled from "styled-components";

const vendido = {
    color:'#F54A48',
    background:'#F54A4833'
}

const disponivel = {
    color:'#34C38F',
    background:'#34C38F33',
}
const reservado = {
    color:'#FAC12F',
    background:'#FAC12F33',
}


export const Container = styled.div`
  padding: 10px;
  max-width: 674px;
  margin: 0 auto;
  display: grid;
   margin-bottom:10px; 
  
  background: #ffffff;
  box-shadow: 0px 0.5px 3px rgba(149, 149, 149, 0.25);
  border-radius: 3px;
  .wrapper-flex {
    display: flex;
    justify-content: space-between;
  }
  .model-value {
    margin-top: 7px;
    margin-bottom: 9px;
    span {
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 24px;
    }
    .color-red {
      color: var(--red);
    }
  }
  .types {
    border: solid 1px var(--inputBorder);
    border-radius: 3px;
    padding: 3px 9px;
    font-weight: normal;
    display: flex;
    font-size: 12px;
    line-height: 18px;
    color:var(--colorTextBasic);
    
    span{
        display:flex;
        align-items:center;
        justify-content: center;
        
    }
    .type {
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 13px;
      display: flex;
      align-items: center;
      letter-spacing: 0.02em;
      margin-right: 5px;
    }
  }
`;

export const Status = styled.span ` 

height: 20px;
width: 70px;
text-align: center;
border-radius:3px;
${(props) => {
    switch(props.children){
        case 'Vendido':
            return vendido
        case 'Disponível':
            return disponivel
        case 'Reservado':
            return reservado
        default:
            return ''
    }
}}

`
