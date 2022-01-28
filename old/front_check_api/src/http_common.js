import axios from "axios";

export default axios.create({
  baseURL: "https://dps-api-crm.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
});