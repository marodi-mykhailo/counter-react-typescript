import React from "react";
import './CountButton.css'
import {ActionsType} from "../../../state/counter-reducer";

type CountButtonPropsType ={
    title: string
    buttonAction: ([key]: any) => void
    disabled: boolean
    inputFocus: boolean
    error: boolean
}

export function CountButton(props: CountButtonPropsType) {
    return(
        <div className={"count-button__wrapper"}>
            <button className={"count-button"} disabled={props.disabled || props.inputFocus || props.error} onClick={props.buttonAction}>{props.title}</button>
        </div>
    )
}
