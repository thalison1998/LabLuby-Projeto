import styled from "styled-components";
import background from "../../../assets/background.jpg";
import logo from "../../../assets/logo-full.svg"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(350px,1fr);
  grid-template-rows:1fr;
 height: 100vh;
       @media (max-width:760px){
        grid-template-columns: 1fr;
        img{
          justify-self:center;
          margin:inherit;
          margin-top:58.28px;
        }
        
    }
`;

export const Background = styled.div`
  background: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const SectionForm = styled.section`
  display: grid;
  grid-template-columns:minmax(300px,825px);
  justify-content: center;
  align-self:start;
  grid-template-rows:60px auto;
  gap:11rem;
    
`;

export const Logo = styled.img.attrs({
    src: logo
})`
padding:70px 0 0 10px;
`

export const Wrapper = styled.div `
display: grid;
place-content:center center;
gap:70px;
align-self:start;

@media (max-width:760px){
  margin-top:39px;
  padding:0 19px;
}
`

export const InputContainer = styled.div`
position:relative;
`

export const SectionText = styled.div`


h1{
    font-size:3.8rem;
    font-weight:700;
    color:var(--black);
    text-align:center;
}
p{
    color:var(--grey);
    font-size:1.2rem;
    font-weight: 700;
      @media (max-width:760px){
        text-align: center;
    }
}

`;
export const RememberPassword = styled.div `
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom:40px;
color:var(--red);
a{
    color:var(--red);
    padding:10px 0;
}
`
export const CreateAnAccount = styled.div`
margin-top:40px;
margin-bottom:10px;
p{
  color:var(--veryGrey);
  font-weight:500;
  font-size:1.4rem;
}
a{
  color:var(--red);
}
`


