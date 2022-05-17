import axios from "axios";

const url = 'https://autoluby.k8s.luby.me/';

export const ApiLogin = axios.create({
  baseURL: "https://autoluby.k8s.luby.me/"
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
