import React from "react";

type TProps = {
    dateInfo: string
}

export const RequestForm:React.FC<TProps> = React.memo((props) => {
    return <div className="request-form">
        {props.dateInfo}
    </div>
})