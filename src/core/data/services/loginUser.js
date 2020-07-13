import { url } from "../endpoints.js";
import axios from "axios";
import store from "../combineReducers";
import { logIn } from "../actions/userActions";
import getUserById from "./getUserById.js";
import { setUserDetails } from "../actions/userActions";


const logInUser = async (userLogInDetails) => {
    try {
        const loginUserEndPoint = `${url.baseUrl}${url.login}`;
        const response = await axios.post(`${loginUserEndPoint}`, userLogInDetails);
        const data = await response;
        if (data.status === 200) {
            store.dispatch(logIn(response.data.userId));
            getUserById(response.data.userId)
            .then(res => {
                store.dispatch(setUserDetails(res.data));
            });

        }
        // todo change to asyn actions with redux-thunks
        return data;
    }
    catch (error) {
        console.warn(error);
    }
};

export default logInUser;
