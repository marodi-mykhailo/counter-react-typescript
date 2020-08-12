import React from "react";
import './CountButton.css'

type CountButtonPropsType ={
    title: string
    minCount: number
    maxCount: number
    buttonAction: () => void
    disabled: boolean
    inputFocus: boolean
}

export function CountButton(props: CountButtonPropsType) {
    return(
        <div className={"count-button__wrapper"}>
            <button className={"count-button"} disabled={props.disabled || props.inputFocus} onClick={props.buttonAction}>{props.title}</button>
        </div>
    )
}
