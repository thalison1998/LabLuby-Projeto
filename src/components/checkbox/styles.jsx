import styled from 'styled-components';



export const CheckboxContainer = styled.div`
   display: flex;
   align-items: center;
`;

export const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
   overflow: hidden;
   white-space: nowrap;width: 1px;
   height: 1px;
   margin: -1px;
   padding: 0;
`;

export const Text = styled.label`
   color:var(--red);
`;

export const StyledCheckbox = styled.label`
   width: 24px;
   height: 24px;
   margin-right: 6px;
   background: ${props => props.checked ?'#F54A48':'#F9F9F9'};
   display: flex;
   justify-content: center;
   align-items: center;
   img {
      display: ${props => props.checked ? 'flex' : 'none'};
      filter: invert(75%) sepia(11%) 
      saturate(6042%) hue- rotate(30deg) 
      brightness(105%) contrast(68%);
   }
`;