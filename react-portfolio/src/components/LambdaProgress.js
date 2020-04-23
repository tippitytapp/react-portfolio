import React from "react";
import {Progress} from 'reactstrap';

function LambdaProgress(props){
return(
    <div className="LambdaProgress">
    <Progress multi>
        <Progress bar striped value="25" color="success">Web Unit 1</Progress>
        <Progress bar striped value="25" color="success">Web Unit 2</Progress>
        <Progress bar animated value="25" color="warning">Web Unit 3</Progress>
    </Progress>
    </div>
)
}

export default LambdaProgress;