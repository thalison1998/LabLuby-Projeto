import styled from "styled-components";

export const Container = styled.header `
padding:31.5px 0;
background:var(--background);
box-shadow:0 2px 25px rgb(169,169,169,20%)
`
export const Wrapper = styled.div `
max-width: 1777px;
margin:0 auto;
display: flex;
justify-content:space-between;
align-items:center;
padding: 0 10px;

   button{
       color:var(--background);
       background-color:var(--red);
       height:38px;
       padding:10px;
       font-size:1.4rem;
       font-weight:700;
       border:none;
       display:flex;
       align-items: center;
       border-radius:3px;
       img{
           margin-left:10px;
       }
   }
   div{
    width:430px;
   }
`
