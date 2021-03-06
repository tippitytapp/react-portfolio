import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as essent from "../assets/essent.JPG";
import * as nasaAPOD from "../assets/nasaAPOD.PNG";
import * as ricknmorty from "../assets/ricknmorty.PNG";
import * as expatjournal from "../assets/expatjournal2.PNG";

function RecentProjects(props){
    const {className} = props;
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    return(
        <div className="recentcontainer">
            <h2> Recent Projects</h2>
            <div className="essent">
            <div className="essentprojectInfo">
                <img height="250px" className="recentImg" src={essent} alt=""/><br/>
                <p className="infoP">In a world with everything shouting for your attention, the disciplined pursuit of less has never been more needed. Enter Essentialism. The Way of the Essentialist involves doing less, but better, so you can make the highest possible contribution.It’s not about getting more done in less time or getting less done. It’s about getting only the right things done. It’s about regaining control of our own choices about where to spend our time and energies instead of giving others implicit permission to choose for us. The first step to essentialism is identifying your values.</p>
                </div>
                <a href="https://essentialism-1.github.io/web-ui/"><button className="btnn">Visit Essentialism</button></a>
            </div>
            <div className="nasaApod">
            <div className="nasaprojectInfo">
                <img height="250px" className="recentImg" src={nasaAPOD} alt=""/><br/>
                <p className="infoP">In a world with everything shouting for your attention, the disciplined pursuit of less has never been more needed. Enter Essentialism. The Way of the Essentialist involves doing less, but better, so you can make the highest possible contribution.It’s not about getting more done in less time or getting less done. It’s about getting only the right things done. It’s about regaining control of our own choices about where to spend our time and energies instead of giving others implicit permission to choose for us. The first step to essentialism is identifying your values.</p>
                </div>
                <a href="https://nasa-apod-bice.now.sh/"><button className="btnn">Visit NASA Photo of the Day</button></a>
            </div>
            <div className="ricknmorty">
            <div className="ricknmortyprojectInfo">
                <img height="250px" className="recentImg" src={ricknmorty} alt=""/><br/>
                <p className="infoP">This site focuses on making API calls, and displaying all the data. This is also the project that allowed me to gain the knowledge and understanding of how to move from page to page through out APIs.  </p>
                </div>
                <a href="https://react-redux-app-drab.now.sh/"><button className="btnn">Visit Rick and Morty</button></a>
            </div>
            <div className="expatjournal">
            <div className="expatjournalInfo">
                <img height="250px" className="recentImg" src={expatjournal} alt=""/><br/>
                <p className="infoP">This site was built using ReactJs. Using reactstrap, styled components, axios for API calls, react-redux for global statte management, and yup for form validation.  </p>
                </div>
                <a href="https://expat-journal-fe.tippitytapp.vercel.app/"><button className="btnn">Visit Foreigner Files</button></a>
            </div>
        </div>
    )
}

export default RecentProjects;