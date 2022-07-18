import React from "react";
import { RowTime } from "./rowTime";
import './timeSelector.css';

type TProps = {
    date: string
    onClickTime: (time: string) => void
}

export const TimeSelector:React.FC<TProps> = React.memo((props) => {
    return <div className="time-selector-container">
        <span className="time-selector-date">{props.date}</span>
        <div className="time-selector-rows">
            <div className="time-selector-row">
                <RowTime 
                    times={[
                        {time: '8:00', active: true},
                        {time: '8:30', active: true},
                        {time: '9:00', active: false},
                        {time: '9:30', active: true},
                        {time: '10:00', active: false},                        
                    ]}
                />
                <RowTime 
                    times={[                        
                        {time: '10:30', active: true},
                        {time: '11:00', active: true},
                        {time: '11:30', active: false}
                    ]}
                />
            </div>
            <div className="time-selector-row">
                <RowTime 
                    times={[
                        {time: '12:00', active: true},
                        {time: '12:30', active: true},
                        {time: '13:00', active: false},
                        {time: '13:30', active: true},
                        {time: '14:00', active: false},                       
                    ]}
                />
                <RowTime 
                    times={[                       
                        {time: '14:30', active: true},
                        {time: '15:00', active: true},
                        {time: '15:30', active: false},
                        {time: '16:00', active: false},
                        {time: '16:30', active: false},                        
                    ]}
                />
                <RowTime 
                    times={[                        
                        {time: '17:00', active: false},
                        {time: '17:30', active: false}
                    ]}
                />
            </div>
            <div className="time-selector-row">
                <RowTime 
                    times={[
                        {time: '18:00', active: true},
                        {time: '18:30', active: true},
                        {time: '19:00', active: false},
                        {time: '19:30', active: true}                    
                    ]}
                />
            </div>
        </div>
    </div>
})