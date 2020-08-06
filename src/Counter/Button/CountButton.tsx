import React from "react";
import './CountButton.css'

type CountButtonPropsType ={
    title: string
    count: number
    buttonAction: () => void
    disabled: boolean
}

export function CountButton(props: CountButtonPropsType) {
    return(
        <div className={"count-button__wrapper"}>
            <button className={"count-button"} disabled={props.disabled} onClick={props.buttonAction}>{props.title}</button>
        </div>
    )
}
