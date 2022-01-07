import React from "react";
import { HashRouter} from "react-router-dom";

import { GlobalStyles } from "./styles/global";
import { AuthProvider } from "./context/AuthProvider";
import { LoginSaveProvider } from "./context/loginSave";
import { ContainerRoutes } from "./Routes";


export const App = () => {
  return (
    <HashRouter >
      <AuthProvider>
        <LoginSaveProvider>

          <ContainerRoutes />

        </LoginSaveProvider>
      </AuthProvider>
      <GlobalStyles />
    </HashRouter>
  );
};
