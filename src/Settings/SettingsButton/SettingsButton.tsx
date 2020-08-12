import React from "react";
import './SettingsButton.css';

type SettingsButtonPropsType = {
    title: string
    minCount: number
    maxCount: number
    buttonAction: () => void
    disabled: boolean
}

function SettingsButton(props:SettingsButtonPropsType){
    return(
        <div className={"count-button__wrapper"}>
            <button className={"count-button"} disabled={props.disabled} onClick={props.buttonAction}>{props.title}</button>
        </div>
    )
}

export default SettingsButton;
