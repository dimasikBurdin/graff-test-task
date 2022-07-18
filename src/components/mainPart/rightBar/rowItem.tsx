import React from "react";

type TProps = {
    value: string
    active: boolean
    onClick: () => void
}

export const RowItem:React.FC<TProps> = React.memo((props) => {
    return <span 
        className={`row-item ${props.active ? '' : 'disabled'}`} 
        onClick={() => {
            if(props.active)
                props.onClick();            
        }}>
        {props.value}
    </span>
})