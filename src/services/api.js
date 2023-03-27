import axios from "axios";

export const api = axios.create({
  baseURL:  "https://foodexplorerapi-gu3t.onrender.com"
});

/* test localy: "http://localhost:3333" */
