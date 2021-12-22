import React from 'react'
import { InputStyled, LabelStyled } from './styles'

export const Input = (props) => {
    

    return (
       <LabelStyled>
           {props.label}
           <InputStyled 
           {...props}
           />
       </LabelStyled>
    )
}
