import React from "react";
import * as facepic from "../assets/facePicture.jpg";


function Home(){
    return(
        <>
        <div className="homeContainer">
            <img className="homeImage" src={facepic} alt="Marc Tapp Face" width="250px"/>
            <div className="writtenContent home">
                <h2>Welcome to my library of completed projects and a <br/>
                    representation of my web development journey</h2>
                <p>It has always brought me great joy to be able to make peoples dreams a reality. And thats why I started this journey into web development. We all have things we would love to see come into reality, and thats what I hope to be able to do for you in the future. I want to deliver on your vision. So let me know what you think, and let me know how I can help.</p>
            </div>
        </div>
        </>
    )
}

export default Home;
