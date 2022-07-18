import React from "react";

type TProps = {
    label: string
    data: Array<{value: string, href?: string}>
}

export const InfoContainer:React.FC<TProps> = React.memo((props) => {
    return <div className="info-container">
        <span className="info-container-label">
            {props.label}
        </span>
        <div className="info-container-info-items">
            {props.data.map(item => {
                return item.href
                    ? <a key={item.value} href={item.href} className='info-container-info-item-href'>{item.value}</a>
                    : <span key={item.value} className="info-container-info-item">{item.value}</span>
            })}
        </div>
    </div>
})