import { url } from "../endpoints.js";
import axios from "axios";
import store from "../combineReducers";

const getRecipeByUserId = async (userId) => {
    try {
        const getRecipeByUserIdEndpoing = `${url.baseUrl}${url.recipes}?filter={"where":{"userId":${userId}}}`;
        // console.log(getRecipeByUserIdEndpoing)

        // const data = await axios.get(`${getRecipeByUserIdEndpoing}`)
        // .then((result) => {
        //     let data = result;
        // });
        // return data;
        let data;
        // fetch data from a url endpoint
        axios.get(`${getRecipeByUserIdEndpoing}`)
        .then((result) => {
            data = result;
        });
        return data;
        // .then(function(response) {
        //     const data = response.data;
        //     return (data);
        // })

        // const data = await response;
        // if (data.status === 200) {
            // store.dispatch(logIn(response.data.userId));
            // put recipes in the store!
        // }
        // todo change to asyn actions with redux-thunks
        // return data;
    }
    catch (error) {
        console.warn(error);
    }
};

export default getRecipeByUserId;
