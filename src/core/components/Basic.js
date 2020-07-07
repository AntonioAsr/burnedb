import React, { useState } from "react";
import { useDropzone } from "react-dropzone";


const Basic = (props) => {

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
    const [ newFile, setNewFile ] = useState({});
    if (newFile !==  acceptedFiles[acceptedFiles.length - 1]) {
        setNewFile(acceptedFiles[acceptedFiles.length - 1]);
        props.updateImage(newFile);
    }

    const Files = () => {
        return (
            <li>
                {
                    newFile ? (
                        <div>
                            {newFile.path} - {newFile.size} bytes
                        </div>
                    ) : (
                        <div>hasnt got new file</div>
                    )
                }
            </li>
        );
    };

    return (
        <section>
            <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                {props.children}
            </div>
            <aside>
                <h4>Files</h4>
                <ul><Files /></ul>
            </aside>
        </section>
    );
};

export default Basic;