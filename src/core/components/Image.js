import React, { Fragment } from "react";
import editDraft from "../images/editDraft.png"
class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
    }

    handleImageLoaded() {
        this.setState({ loaded: true });
    }

    render() {
        const { loaded } = this.state;
        return (
            <>
                <div style={{ height: "300px", backgroundColor: "tranpsarent", marginTop: "20px" }}>
                    {
                        !loaded && <img src={editDraft} alt="" onLoad={this.handleImageLoaded} style={{ width: "100%", height: "300px", backgroundSize: "cover" }} />
                    }
                    <img src={this.props.src} alt="app logo" style={{ width: "100%", height: "300px", backgroundSize: "cover" }} />
                </div>
            </>
        );
    }
}
export default Image;