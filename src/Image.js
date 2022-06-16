import React from 'react';
import ReactDOM from 'react-dom'
import image1 from "./dp x.jpeg";

function Image(props){
    return(
        <img id="dp" src={image1} width={props.width} height="300px"  />
    );
}

export default Image;