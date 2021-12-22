import React from 'react'
import CheckIcon from '../../assets/checkBox.svg';
import { useLoginSave } from '../../context/loginSave/useLoginSave';

import
{
   CheckboxContainer,
   HiddenCheckbox,
   StyledCheckbox,
   Text
} from './styles';

export const CheckBox = ({valueLabel}) => {

    const { handleCheckboxChange,checked } = useLoginSave()
    
    return (
        <CheckboxContainer
        checked={checked}
        onClick={handleCheckboxChange}
        readOnly
        >
         <HiddenCheckbox 
         checked={checked}
         onClick={handleCheckboxChange}
         readOnly
         />
         <StyledCheckbox checked={checked} readOnly> 
         <img
            alt="tick icon"
            style={{width: '15px'}}
            src={CheckIcon}
         />
         </StyledCheckbox>
         <Text> {valueLabel} </Text>
       </ CheckboxContainer>
    )
}
