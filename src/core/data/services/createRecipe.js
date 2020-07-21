import { url } from "../endpoints";
import axios from "axios";
import postRecipeImage from "./postRecipeImage";
import history from "../history";

let createRecipe = async (recipeDetails, imgFile,) => {
    // for now we pass category id 1 = starter
    let recipeId;
    try {
        const createRecipeEndPoint = `${url.baseUrl}${url.createUser}/${recipeDetails.userId}/recipes`;
        axios.post(`${createRecipeEndPoint}`, recipeDetails)
        .then((response) => {
            recipeId = response.data.id;
            if(Object.keys(imgFile).length){
                postRecipeImage(recipeId, imgFile);
            }
        })
        .then(function (response) {
            // check if there are more than one ingredients list, then repeat this call.
            // NOTE: only the first one has main as true! ~ is the main ingredient list
            const createRecipeIngredientList = `${url.baseUrl}/recipes/${recipeId}/ingredientsLists`;
            axios.post(`${createRecipeIngredientList}`, {
                name: "Main ingredients list",
                main: true,
                index: 1
            })
            .then(function(response) {
                const ingredientsListId = response.data.id;
                // split ingriedients by spaces and post each one
                const recipeIngredientLists = `${url.baseUrl}/recipeIngredientLists/${ingredientsListId}/ingredients`;
                const allIngredients = recipeDetails.ingredientsListMain;
                const arrayOfIngredients = allIngredients.split(/\r?\n/)

                arrayOfIngredients.map((ingredient => {
                    const body = {
                        index: 0,
                        ingredient: ingredient,
                        quantity: 0,
                    }
                    debugger;
                    axios.post(`${recipeIngredientLists}`, body)
    
                }))
                // allIngredients.map((ingredient => {})
            });
        });
    }
    catch (error) {
        console.warn(error);
    }
    // need to check if is draft / there is image file
};

export default createRecipe;






// import { url } from "../endpoints.js";
// import axios from "axios";

// let createRecipe = async (recipeDetails) => {
//     // axios.post('/user', {
//     //     firstName: 'Fred',
//     //     lastName: 'Flintstone'
//     //   })
//     //   .then(function (response) {
//     //     console.log(response);
//     //   })
//     // for now we pass category id 1 = starter
//     try {
//         const createRecipeEndPoint = `${url.baseUrl}${url.createUser}/${recipeDetails.userId}/recipes`;
//         axios.post(`${createRecipeEndPoint}`, recipeDetails)

//         .then(function (response) {
//             const recipeId = response.data.id;
//             // check if there are more than one ingredients list, then repeat this call.
//             // NOTE: only the first one has main as true! ~ is the main ingredient list
//             const createRecipeIngredientList = `${url.baseUrl}/recipes/${recipeId}/ingredientsLists`;
//             axios.post(`${createRecipeIngredientList}`, {
//                 name: "Main ingredients list",
//                 main: true,
//                 index: 0
//             })
//             .then(function(response) {
//                 // POST /recipeIngredientLists/{id}/ingredients
//                 const ingredientsListId = response.data.id;
//                 const recipeIngredientLists = `${url.baseUrl}/recipeIngredientLists/${ingredientsListId}/ingredients`;
//                 axios.post(`${recipeIngredientLists}`, recipeDetails);
//             });
//         });
//     }
//     catch (error) {
//         console.warn(error);
//     }
// };

// export default createRecipe;
