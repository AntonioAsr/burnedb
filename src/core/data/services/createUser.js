import { url } from "../endpoints.js";
import axios from "axios";

let createUser = async (userDetails) => {
    try {
        const createUserEndpoint = `${url.baseUrl}${url.createUser}`;
        const response = await axios.post(`${createUserEndpoint}`, userDetails);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.warn(error);
    }
};

export default createUser;
