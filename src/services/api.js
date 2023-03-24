import axios from "axios";

export const api = axios.create({
  baseURL:  "http://localhost:3333"
});

/* to test localy: "http://localhost:3333" */
