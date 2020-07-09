import { url } from "../endpoints.js";
import axios from "axios";
import FormData from "form-data"

// const postRecipeImage = async (recipeId, imgFile) => {
//     try {
//         axios.post(`${url.baseUrl}/images/${recipeId}/upload`, imgFile)
//         .then((response) => {
//             console.log(response);
//         });
//     }
//     catch (error) {
//         console.warn(error);
//     }
// };

const postRecipeImage = async (recipeId, imgFile) => {
    let data = new FormData();
    data.append(recipeId, imgFile, `${recipeId}.jpg`);
    console.log("receipe id", recipeId)
    const postImageEndPoint = `${url.baseUrl}${url.recipeImage}`;
    axios.post(`${postImageEndPoint}/${recipeId}/upload`, data, {
        headers: {
            "accept": "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data`
        }
    })
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });
};

// const postRecipeImage = async (recipeId, fd) => {

//     try {
//         const postImageEndPoint = `${url.baseUrl}${url.recipeImage}`;
//         const response = await axios.post(`${postImageEndPoint}/${recipeId}/upload`, fd);
//         const data = await response;
//         // todo change to asyn actions with redux-thunks
//         return data;
//     }
//     catch (error) {
//         console.warn(error);
//     }
// };

// export default postRecipeImage;


// const postRecipeImage = async (recipeId, imgFile) => {
//     const fd = new FormData();
//     fd.append("image", imgFile);

//     try {
//         const postImageEndPoint = `${url.baseUrl}${url.recipeImage}`;
//         const response = await axios.post(`${postImageEndPoint}/${recipeId}/upload`, fd);
//         const data = await response;
//         // todo change to asyn actions with redux-thunks
//         return data;
//     }
//     catch (error) {
//         console.warn(error);
//     }
// };

export default postRecipeImage;
