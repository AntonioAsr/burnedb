import { url } from "../endpoints.js";
import axios from "axios";
import store from "../combineReducers";
import { logIn } from "../actions/userActions";

const updateUser = async (updatedDetails) => {
    console.log("updatedDetails")
    try {
        const loginUserEndPoint = `${url.baseUrl}/users/189`;
        const response = await axios.put(`${loginUserEndPoint}`, updatedDetails);
        const data = await response;
        if (data.status === 200) {
            store.dispatch(logIn(response.data.userId));
        }
        // todo change to asyn actions with redux-thunks
        return data;
    }
    catch (error) {
        console.warn(error);
    }
};

export default updateUser;
