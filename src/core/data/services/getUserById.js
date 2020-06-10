import { url } from "../endpoints.js";
import axios from "axios";

let getUserById = async (id) => {
    try {
        const createUserEndpoint = `${url.baseUrl}${url.createUser}`;
        const response = await axios.get(`${createUserEndpoint}/${id}`);
        const data = await response;
        return data;
    }
    catch (error) {
        console.warn(error);
    }
};

export default getUserById;
