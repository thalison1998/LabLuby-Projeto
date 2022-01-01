import styled from "styled-components";


const active = { 
color:'#FFFFFF',
background:'#F54A48'
}

const desative = {
  color:'#858585',
  background:'none'
  
}

export const ContainerIndex = styled.div ` 
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width:920px){
        flex-direction:column-reverse;
        margin-bottom: 10px;
    }
    
    .prev{
        background-color: #EDEDED;
        img{
            margin-right:8px;
        }
    }
    .next{
        background: none;
        img{
            margin-left: 8px;
        }
    }
    .next, .prev{
    display: flex;
    padding: 5px 8px;
    align-items: center;
    border:none;
    font-size:1.4rem;
    color:var(--colorTextBasic);
    font-weight:700;
    }

    div{
        display: flex;
        align-items:center;

        @media (max-width:920px) {   
            width: 337px;
            justify-content:space-between;
            margin-top:10px;
        }
        
    }
    input {
        width:206px;
        height: 40px;
        border-radius: 3px;
        border:var(--inputBorder) 1px solid;
        background-color: var(--inputBackground);
        @media (max-width:920px) {   
            width: 337px;
        }
    }
    label{
        position: relative;
    }
    .img-search{
        position:absolute;
        right: 10px;
        top:12px;
    }
`
export const ButtonIndex = styled.button ` 
border-radius:3px;
height: 24px;
width: 24px;
border: none;
margin: 0 8px;
font-size:1.3rem;
font-weight: 600;
${(props) => {
    return props['data-direction'] === props.pageNumber?active:desative
}}
`
