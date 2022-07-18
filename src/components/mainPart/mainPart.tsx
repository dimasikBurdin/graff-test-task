import React from "react";
import './mainPart.css';
import backImage from './mainImage.svg';
import whiteLogo from './logoWhiteIcon.svg';
import Calendar from "react-calendar";
import './rightBar/calendar.css';

export const MainPart:React.FC = React.memo(() => {

    function onClickEntry() {

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
        <Calendar 
            showNeighboringMonth={false}
            showDoubleView={false}
            next2Label={null}
            prev2Label={null}
            tileDisabled={(a) => a.date.getDate() === 23}
            minDate={new Date()}
        />
    </div>
})