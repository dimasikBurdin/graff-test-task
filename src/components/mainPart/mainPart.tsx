import React from "react";
import './mainPart.css';
import backImage from './mainImage.svg';
import whiteLogo from './logoWhiteIcon.svg';

export const MainPart:React.FC = React.memo(() => {
    return <div className="main-part-container">
        <div className="main-part-image"></div>
        <img className="main-part-logo" src={whiteLogo} alt="лого компании" />
    </div>
})