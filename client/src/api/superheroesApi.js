import axios from "axios";

const httpClient = axios.create({
    baseURL: "http://localhost:5000/api",
});

export const getHeroes = async () => await httpClient.get("/superheroes");
