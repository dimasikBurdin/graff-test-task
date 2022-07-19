import React, { useEffect, useRef, useState } from "react";
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
    const [backButton, setBackButton] = useState<JSX.Element>(<></>);
    const history = useRef<Array<{title: string, value: JSX.Element}>>(new Array());
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

    useEffect(() => {
        // console.log(title, currentView)
        let newHistory = {
            title: title,
            value: currentView
        }
        if(history.current[history.current.length-1]?.title !== newHistory.title) {
            history.current.push(newHistory)
        }
        
    }, [title, currentView]);

    function onClickDay(day: number, month: number) {
        setBackButton(
            <button className="right-bar-back-button" onClick={() => toPrev()}></button>
        )
        setTitle('Выбор времени');
        setCurrentView(
            <TimeSelector 
                date={`${day} ${months[month as keyof typeof months].toLowerCase()}`}
                onClickTime={(date, time) => onClickTime(date, time)}
            />
        )

        
        // console.log(day, months[month as keyof typeof months].toLowerCase())
    }

    function onClickTime(date: string, time: string) {
        setTitle('Оформление заявки');
        setCurrentView(
            <RequestForm 
                dateInfo={`${date}, ${time}`}
                onSubmit={onSubmitRequest}
            />
        )
        console.log(date, time)
    }

    function onSubmitRequest() {
        setTitle('')
    }

    function toMain() {
        props.closeRightBar();
    }

    function toPrev() {
        console.log(history)
        let temp = [...history.current];
        let lastElement = temp[temp.length-2];
        setTitle(lastElement.title);
        setCurrentView(lastElement.value);
        history.current.splice(temp.length-1, 1);
        // console.log(history.current)
        if(history.current.length === 1) {
            setBackButton(<></>)
        }
    }

    if(!title) {
        return <div className="right-bar-finish-container">
            <span className="right-bar-finish-title">
                Просмотр запланирован
            </span>
            <span className="right-bar-finish-description">
                Дополнительная информация будет отправлена на указанный почтовый адрес или номер телефона.
            </span>
            <button className="right-bar-finish-button" onClick={() => toMain()}>На главную</button>
        </div>
    }

    return <div className="right-bar-container">
        <div className="right-bar-header">
            <div className="right-bar-left-part">
                {backButton}
                <span className="right-bar-title">{title}</span>
            </div>            
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
