import styled from 'styled-components'

export const Button = styled.button `
width:100%;
height: 37px;
border: none;
border-radius:3px;
background-color:var(--red);
color:var(--background);
font-size:1.4rem;
font-weight:700;

   &:hover{
    background-color:#DF3938;
}
 &:active{
    background-color:#DF3938;
    border:1.5px #971212 solid ;
}
`