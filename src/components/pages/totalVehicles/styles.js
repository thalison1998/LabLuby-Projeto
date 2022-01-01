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

export const Main = styled.main`
  max-width: 1620px;
  margin: 45px auto 0 auto;
 
  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: var(--black);
    display: block;
    margin-bottom: 5px;
  }
`;

export const Container = styled.section `
 h2{
     font-size: 2rem;
     font-weight: 600;
     @media (max-width:920px) {   
            font-size:2.4rem;
            text-align: left;
            margin-bottom:17px;
            color:var(--black);
        }
 }
`
export const ContainerTable = styled.div `
    margin-top:40px;
    padding:20px 15px;
    border-radius: 3px;
    border:1px solid var(--inputBorder);
    box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);
    @media (max-width:920px){
        background-color: var(--inputBackground);
        
    }

`
export const Wrapper = styled.div ` 
    display: flex;
    justify-content: space-between;
    @media (max-width:920px){
        flex-direction:column;
        justify-content:center;
    }
`

export const Table = styled.div `
margin-top: 20px;


 .wrapper-table{
     display: grid;
     grid-template-columns:repeat(8, minmax(80px, 102px));
     margin:25px 0 50px 0;
     font-size:1.6rem;
     font-weight: 500;
     color: #495057;
     justify-content: space-between;
    align-items:center;
    gap:10px;
     .center{
    padding: 6px 0;
    text-align:center;
    }
 
 }
 .head-table{
    display: grid;
    gap:10px;
    grid-template-columns:repeat(8, minmax(80px, 102px));
    background-color: var(--inputBackground);
    padding:26px 0;
    border-radius: 3px;
    font-weight: 700;
    text-transform: uppercase;
    color:var(--colorTextBasic);
    font-size:1.3rem;
    justify-content: space-between;
    .center{
    text-align:center;
}
 }
`
export const List = styled.li ` 
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
} }

`