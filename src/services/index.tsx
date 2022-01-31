import axios from "axios";
export const api = axios.create({
  baseURL: "https://database-capstone.herokuapp.com",
});
