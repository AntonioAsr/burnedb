import { url } from "../endpoints.js";
import axios from "axios";

let createUser = async (userDetails) => {
    try {
        const createUserEndpoint = `${url.baseUrl}${url.createUser}`;
        await axios.post(`${createUserEndpoint}`, userDetails);
    }
    catch (error) {
        console.warn(error);
    }
};

export default createUser;
