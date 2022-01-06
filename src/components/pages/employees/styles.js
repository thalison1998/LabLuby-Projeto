import styled from "styled-components";

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
        display: grid;
        gap:10px;
    }

    .wrapper-table-employees{
     display: grid;
     grid-template-columns: repeat(4,minmax(120px,170px)) 2fr;
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
    .head-table-employees{
    display: grid;
    grid-template-columns: repeat(4,minmax(120px,170px)) 2fr;
    gap:10px;
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
`
export const ListEmployees = styled.li ` 

`