import { url } from "../endpoints.js";
import axios from "axios";
import FormData from "form-data";
import { srcToFile } from "../../utils";


const postRecipeImage = async (recipeId, imgFile) => {
    let data = new FormData();
    data.append(recipeId, imgFile, `${recipeId}.jpg`);
    const postImageEndPoint = `${url.baseUrl}${url.recipeImage}`;
    axios.post(`${postImageEndPoint}/${recipeId}/upload`, data, {
        headers: {
            "accept": "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data`
        }
    })
    .then((response) => {
        if (response.status === 200) {
            const reader = new FileReader();
            reader.readAsDataURL(imgFile);
            reader.onload = function(event) {
                const img = document.createElement("img");
                img.src = event.target.result;
                img.onload = function(event) {
                    const canvas = document.createElement("canvas");
                    const MAX_WIDTH = 650;
                    const scaleSize = MAX_WIDTH / event.target.width;
                    canvas.width = MAX_WIDTH;
                    canvas.height = event.target.height * scaleSize;
                    const context = canvas.getContext("2d");
                    context.drawImage(event.target, 0, 0, canvas.width, canvas.height);
                    const srcEncoded = context.canvas.toDataURL(event.target, "image/jpeg");
                    // test that is resizing
                    // document.querySelector(".myImage").src = srcEncoded;
                    srcToFile(srcEncoded, `${recipeId}_thumb.jpg`, "image/jpeg")
                    .then(function (imgFile) {
                        let data = new FormData();
                        data.append(recipeId, imgFile);
                        axios.post(`${postImageEndPoint}/${recipeId}/upload`, data, {
                            headers: {
                                "accept": "application/json",
                                "Accept-Language": "en-US,en;q=0.8",
                                "Content-Type": `multipart/form-data`
                            }
                        });
                    });
                };
            };
        }
    });
    // post the thumbnail
};


export default postRecipeImage;
