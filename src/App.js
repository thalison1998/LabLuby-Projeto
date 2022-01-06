import React from "react";
import { BrowserRouter} from "react-router-dom";

import { GlobalStyles } from "./styles/global";
import { AuthProvider } from "./context/AuthProvider";
import { LoginSaveProvider } from "./context/loginSave";
import { ContainerRoutes } from "./Routes";


export const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LoginSaveProvider>

          <ContainerRoutes />

        </LoginSaveProvider>
      </AuthProvider>
      <GlobalStyles />
    </BrowserRouter>
  );
};
