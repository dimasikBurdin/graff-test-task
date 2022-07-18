import React, { useState } from "react";
import Calendar from "react-calendar";
import './calendar.css';
import { Legend } from "./legend";
import './rightBar.css';

type TProps = {
    closeRightBar: () => void
}

export const RightBar:React.FC<TProps> = React.memo((props) => {
    const [title, setTitle] = useState<string>('Выбор даты');
    const [currentView, setCurrentView] = useState<JSX.Element>(
        <Calendar 
            showNeighboringMonth={false}
            showDoubleView={false}
            next2Label={null}
            prev2Label={null}
            tileDisabled={(a) => a.date.getDate() === 23}
            minDate={new Date()}
        />
    );

    return <div className="right-bar-container">
        <div className="right-bar-header">
            <span className="right-bar-title">{title}</span>
            <button className="right-bar-close-button" onClick={() => props.closeRightBar()}></button>
        </div>
        <div className="right-bar-content-container">
            {currentView}
        </div>        
        <div className="right-bar-legend-container">
            <Legend active={true} />
            <Legend active={false} />
        </div>
    </div>
})
