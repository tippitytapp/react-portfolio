import React from "react";
import * as resume from "../downloads/Marc Tapp Resume.pdf"

function Resume() { 
    return (
        <div className="resume">
            <iframe src={resume} width="80%" height="100%"/>
    </div>
)
}
export default Resume;