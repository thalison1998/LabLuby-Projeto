import React, { createContext } from "react";
import { loginRequest } from "./helper";
import { ApiLogin } from "../../service/api";
import { getUserStorage, setUserStorage } from "./helper";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigation = useNavigate();

  const [token, setToken] = React.useState("");
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [loginIsOk, setLoginIsOk] = React.useState(false);

  React.useEffect(() => {

    const user = getUserStorage();
    (async () => {
      if (user) {
        setToken(user);
        setLoginIsOk(true)
        const response = await loginRequest(user.email, user.password);
        setData(response);
      }
    })();
  }, []);
 
  const timeoutRef = React.useRef();

  const autheticate = async (email, password) => {
    setLoading(true);
    try {
      const request = await ApiLogin.post("login", { email, password });
      const response = request.data;

      const payload = { token: response.token, email, password };
      setToken(payload);
      setUserStorage(payload);
      setData(response);
      setLoginIsOk(true)
      navigation("LabLuby-Projeto/Home");
     
    } catch (error) {
      setError(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setError(false), 2000);
      
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    window.localStorage.removeItem("user");
    setLoginIsOk(false)
    navigation("/LabLuby-Projeto");
    
  };

  return (
    <AuthContext.Provider
      value={{ ...token, autheticate, logout, data, loading, error, loginIsOk }}
    >
      {children}
    </AuthContext.Provider>
  );
};
