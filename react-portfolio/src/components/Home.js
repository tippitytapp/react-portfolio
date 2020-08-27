import React, { useEffect } from "react";
import * as facepic from "../assets/facePicture.jpg";
import axios from "axios";



function Home() {
//   function getGitHub(url){ 
//         axios.get(url)
//             .then(res => {
//                 console.log("response from axios", res)
//                             var iframe = document.getElementById("github");
//                             iframe.src =
//                               "data:text/html;base64," +
//                               encodeURIComponent(JSON.stringify(res)["content"]);
//             }).then(function(data) {

//         })}

// useEffect(() => { 
//     getGitHub('https://api.github.com/repos/Build-Week-Dev-Queue-3/back-end')
// },[]
// )
    return (
      <>
        <div className="homeContainer">
          <div className="writtenContent home">
            <p>
              It has always brought me great joy to be able to make peoples
              dreams a reality. And thats why I started this journey into web
              development. We all have things we would love to see come into
              reality, and thats what I hope to be able to do for you in the
              future. I want to deliver on your vision. So let me know what you
              think, and let me know how I can help.
            </p>
          </div>
          <div className="githublinks">
            <h2 className="githublinks">
              Links to BackEnd Github Repositories
            </h2>
            <div className="ghl">
              <a href="https://github.com/Build-Week-Dev-Queue-3/back-end">
                Dev Desk Queue Backend
              </a>

              <a href="https://github.com/tippitytapp/GranDesignsBackend">
                GranDesigns Backend
              </a>

              <a href="https://github.com/tippitytapp/nodejsherokupostgres">
                NodeJs with Heroku, Postgres, Express Tutorial
              </a>
            </div>
          </div>
          <div className="iframes">
            <div className="indIframe">
              <h2 className="title">Pokemon</h2>
              <iframe
                className="project"
                src="https://pokemon-jet.vercel.app"
                allowFullScreen
                seamless
              />
            </div>
            <div className="indIframe">
              <h2 className="title">Game of Life</h2>
              <iframe
                className="project"
                src="https://gameoflife-9rap3q5i7.vercel.app/play"
                allowFullScreen
                seamless
              />
            </div>
            <div className="indIframe">
              <h2 className="title">Foreigner Files</h2>
              <iframe
                className="project"
                src="https://expat-journal-fe.vercel.app/"
                allowFullScreen
                seamless
              />
            </div>
            <div className="indIframe">
              <h2 className="title">Rick n Morty</h2>
              <iframe
                className="project"
                src="https://ricknmortyreduxapp.now.sh/"
                allowFullScreen
                seamless
              />
            </div>
            <div className="indIframe">
              <h2 className="title">Dev Desk Queue</h2>
              <iframe
                className="project"
                src="https://dev-queue.perezented.now.sh/login"
                allowFullScreen
                seamless
              />
            </div>
            <div className="indIframe">
              <h2 className="title">Essentialism</h2>
              <iframe
                className="project"
                src="https://essentialism-1.github.io/web-ui/"
                allowFullScreen
                seamless
              />
            </div>
          </div>
        </div>
      </>
    );
}

export default Home;
