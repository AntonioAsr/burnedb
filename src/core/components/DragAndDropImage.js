import React, { useState } from "react";
import { useDropzone } from "react-dropzone";


const DragAndDropImage = (props) => {

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
    const [ newFile, setNewFile ] = useState({});
    if (newFile !==  acceptedFiles[acceptedFiles.length - 1]) {
        setNewFile(acceptedFiles[acceptedFiles.length - 1]);
        props.updateImage(acceptedFiles[acceptedFiles.length - 1]);
    }

    return (
        <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            {props.children}
        </div>
    );
};

export default DragAndDropImage;