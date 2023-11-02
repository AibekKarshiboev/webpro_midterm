import React, {Component} from "react";

export class Textarea extends Component {
    render() {
        const textareaStyle = {
            backgroundColor: 'lightblue', // Change this to your desired background color
        };
        return (
            <div>
                <textarea
                    className="textarea"
                    name="textarea"
                    id="textarea"
                    cols="25"
                    rows="5"
                    placeholder={"Enter something..."}
                    style={textareaStyle} // Apply the inline CSS style
                />
            </div>
        );
    }
}

export default Textarea;
