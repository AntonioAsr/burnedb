import React, { useState } from "react";
import { useDropzone } from "react-dropzone";


const DragAndDropImage = (props) => {

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
    // let newObject = Object.defineProperty(imgFile, "name", {
    //     writable: true,
    //     value: recipeDetails.userId
    // });
    const [ newFile, setNewFile ] = useState({});
    if (newFile !==  acceptedFiles[acceptedFiles.length - 1]) {
        // console.log(acceptedFiles[acceptedFiles.length - 1].type)
        setNewFile(acceptedFiles[acceptedFiles.length - 1]);
        props.updateImage(acceptedFiles[acceptedFiles.length - 1]);
    }

    return (
        <div id="drop" {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            {props.children}
        </div>
    );
};

export default DragAndDropImage;