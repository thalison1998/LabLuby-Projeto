import styled from "styled-components";

export const LabelSearch = styled.label `
 position: relative;
            img{
                width:20px;
                height:20px;
                position: absolute;
                right:12px;
                top:0px;
            }

`

export const InputSearch = styled.input.attrs(()=>({
    type:'search'
}))`
height:44px;
width:100%;
background:var(--inputBackground);
border:var(--inputBorder) solid 1px;
padding-left: 15px;
border-radius: 3px;
`