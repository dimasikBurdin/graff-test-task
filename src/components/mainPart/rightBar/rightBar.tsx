import React, { useState } from "react";
import Calendar from "react-calendar";
import { ObjectType } from "typescript";
import './calendar.css';
import { RequestForm } from "./form/requestForm";
import { Legend } from "./legend";
import './rightBar.css';
import { TimeSelector } from "./timeSelector/timeSelector";

type TProps = {
    closeRightBar: () => void
}

export const RightBar:React.FC<TProps> = React.memo((props) => {
    const months = {
        0: 'Января',
        1: 'Февраля',
        2: 'Марта',
        3: 'Апреля',
        4: 'Мая',
        5: 'Июня',
        6: 'Июля',
        7: 'Августа',
        8: 'Сентября',
        9: 'Октября',
        10: 'Ноября',
        11: 'Декабря'
    }
    const [title, setTitle] = useState<string>('Выбор даты');
    const [currentView, setCurrentView] = useState<JSX.Element>(
        <Calendar 
            showNeighboringMonth={false}
            showDoubleView={false}
            next2Label={null}
            prev2Label={null}
            tileDisabled={(a) => a.date.getDate() === 23}
            minDate={new Date()}
            onClickDay={(e) => onClickDay(e.getDate(), e.getMonth())}
        />
    );

    function onClickDay(day: number, month: number) {
        setTitle('Выбор времени');
        setCurrentView(
            <TimeSelector 
                date={`${day} ${months[month as keyof typeof months].toLowerCase()}`}
                onClickTime={(date, time) => onClickTime(date, time)}
            />
        )
        console.log(day, months[month as keyof typeof months].toLowerCase())
    }

    function onClickTime(date: string, time: string) {
        setTitle('Оформление заявки');
        setCurrentView(
            <RequestForm 
                dateInfo={`${date}, ${time}`}
            />
        )
        console.log(date, time)
    }

    return <div className="right-bar-container">
        <div className="right-bar-header">
            <span className="right-bar-title">{title}</span>
            <button className="right-bar-close-button" onClick={() => props.closeRightBar()}></button>
        </div>
        <div className="right-bar-content-container">
            {currentView}
            {
            title !== 'Оформление заявки'
            ? <div className="right-bar-legend-container">
                <Legend active={true} />
                <Legend active={false} />
            </div>
            : null
        }
        </div>
        
        
    </div>
})
