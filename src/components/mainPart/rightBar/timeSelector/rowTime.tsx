import React from "react";
import { RowItem } from "../rowItem";

type TProps = {
    times: Array<{time: string, active: boolean}>
}

export const RowTime:React.FC<TProps> = React.memo((props) => {
    return <div className="row-time-container">
        {props.times.map(item => {
            return <RowItem 
                key={item.time} 
                active={item.active}
                value={item.time}
            />
        })}
    </div>
})