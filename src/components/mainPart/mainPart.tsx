import React, { useState } from "react";
import './mainPart.css';
import whiteLogo from './logoWhiteIcon.svg';
import { CSSTransition } from "react-transition-group";
import { RightBar } from "./rightBar/rightBar";


export const MainPart:React.FC = React.memo(() => {
    const [showRightBar, setShowRightBar] = useState(false);
    const [showBackGray, setShowBackGray] = useState(false);

    function onClickEntry() {
        enableBackgroundGray();
        setShowRightBar(true);
    }

    function closeRightBar() {
        disableBackgroundGray();
        setShowRightBar(false);
    }

    function enableBackgroundGray() {
        setShowBackGray(true);
    }

    function disableBackgroundGray() {
        setShowBackGray(false);
    }

    return <div className="main-part-container">
        <div className="main-part-image"></div>
        <img className="main-part-logo" src={whiteLogo} alt="лого компании" />
        <div className="main-part-info-container">
            <div className="main-part-info-text-container">
                <span className="main-part-info-text-title">
                    Жилой комплекс в центре города
                </span>
                <span className="main-part-info-text-descript">
                    Создатели проекта хотели создать для вас атмосферу бесконечного космического пространства, спокойствия и уединения в окружении элегантных интерьеров.
                </span>

            </div>
            <button className="main-part-info-button" onClick={() => onClickEntry()}>Записаться на просмотр</button>
        </div>

        <CSSTransition
            in={showBackGray}
            timeout={300}
            classNames='show-back-gray'
            unmountOnExit
        >
            <div className="main-part-background-gray"></div>
        </CSSTransition>
        
        <CSSTransition 
            in={showRightBar}
            timeout={300}
            classNames='show-right-bar'
            unmountOnExit
        >
            <RightBar 
                closeRightBar={closeRightBar}
            />
        </CSSTransition>
        
    </div>
})