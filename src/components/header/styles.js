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
   .search{
    width:430px;
   }
   .log-out{
       display: flex;
       align-items: center;
   }
   .mobile-search{
       margin-right:24px;
   }
   h3{
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: 0.03em;
    text-align: center;
    color:var(--red)
   }
`

export const Button = styled.button ` 
       color:var(--background);
       background-color: var(--red);
       height:38px;
       padding:10px;
       font-size:1.4rem;
       font-weight:700;
       border:none;
       display: flex;
       border-radius:3px;
        @media (max-width:920px){
            height:inherit;
            padding:inherit;
            background-color:transparent;
        }

       img{
           margin-left:10px;
           @media (max-width:920px){
            margin-left: inherit;
        }
       }
`
