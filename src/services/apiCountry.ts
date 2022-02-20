import axios from "axios";

const cards = axios.create({
  baseURL: "https://restcountries.com/v3.1/name",
});

export default cards;