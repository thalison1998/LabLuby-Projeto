import styled, { keyframes } from 'styled-components'

export const Container = styled.main `
  max-width:801px;
  margin:65px auto 0 auto;
`

export const SectionHome = styled.section `
   margin-bottom:10px;
    h1{
    font-size: 3rem;
    font-weight:700;
    color:var(--black);
    display: block;
    margin-bottom:5px;
    }
    p{
        font-size:1.8rem;
        font-weight:500;
        color:var(--colorTextBasic)
    }
`

const Focus = keyframes `
from{
transform: scale(1);
}
to{
  transform: scale(1.1)
}
`

export const Nav = styled.nav `
display:grid;
margin-top:30px;
gap:20px;

.item-menu {
  display: flex;
  border-radius:3px;
  border:1px solid var(--inputBorder);
  
    &:hover{
      animation: ${Focus} .3s ease forwards ;
    }
    .wrapper{
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    flex:1;
    padding:30px;
    
      h2{
        color:#495057;
        font-weight: 700;
        margin-bottom:10px;
        font-size:2.6rem;
      };
      span{
        display: block;
        text-align:end;
        font-weight: 700;
        font-size: 1.3rem;
        color:var(--red)
      }
}}
`