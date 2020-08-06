import React from "react";
import './SettingsInput.css'

type SettingsInputPropsType = {
    title: string
    value:  number
}

export function SettingsInput(props: SettingsInputPropsType) {
    return(
        <div className={"setting-input__wrapper"}>
            <p className={"setting-input__text"}>{props.title}:</p>
            <input className={"setting-input__input"} type={"number"} value={props.value}/>
        </div>
    )
}
