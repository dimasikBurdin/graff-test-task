import React from "react";

type TProps = {
    value: string
    active: boolean
}

export const RowItem:React.FC<TProps> = React.memo((props) => {
    return <span className={`row-item ${props.active ? '' : 'disabled'}`}>
        {props.value}
    </span>
})