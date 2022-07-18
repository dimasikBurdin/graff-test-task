import React from "react";

type TProps = {
    active: boolean
}

export const Legend:React.FC<TProps> = React.memo((props) => {
    return <div className="legend-container">
        <span className={`legend-circle ${props.active ? 'black' : 'gray'}`}></span>
        <span className={`legend-text ${props.active ? 'black' : 'gray'}`}>
            {
                props.active            
                ? 'Запись есть'
                : 'Записи нет'
            }
        </span>
    </div>
})