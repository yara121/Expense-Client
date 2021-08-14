import axios from "axios";

export const apiLogin = (request_data) => {
  return axios.post("http://localhost:5000/api/v1/auth", request_data);
};

//http://localhost:5000/