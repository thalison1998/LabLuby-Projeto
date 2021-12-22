import React, { createContext } from "react";

export const LoginSaveContext = createContext();

export const LoginSaveProvider = ({ children }) => {

    const [checked, setChecked] = React.useState(JSON.parse(localStorage.getItem('check') !== null ?
    JSON.parse(localStorage.getItem('check')):false))
    

    const  handleCheckboxChange = () =>{ 
       window.localStorage.setItem('check',!checked)
       setChecked(!checked);
    }


  return (
    <LoginSaveContext.Provider
      value={{handleCheckboxChange, checked}}
    >
      {children}
    </LoginSaveContext.Provider>
  );
};