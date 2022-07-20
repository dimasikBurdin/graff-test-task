import React from "react";
import { RowItem } from "./rowItem";

type TProps = {
    times: Array<{time: string, active: boolean}>
    onClick: (time: string) => void
}

export const RowTime:React.FC<TProps> = React.memo((props) => {
    return <div className="row-time-container">
        {props.times.map((item, index) => {
            return <RowItem 
                key={item.time+index} 
                active={item.active}
                value={item.time}
                onClick={() => {
                    if(!item.time)
                        return
                    props.onClick(item.time)
                }}
            />
        })}
    </div>
})