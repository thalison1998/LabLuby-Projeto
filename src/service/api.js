import axios from "axios";

const url = 'https://autoluby.dev.luby.com.br/';

export const ApiLogin = axios.create({
  baseURL: "https://autoluby.dev.luby.com.br/"
})


export const getAll = (token, direction) => {
  return {
    url: url + direction,
    options: {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  };
};