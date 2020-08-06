import React, {useState} from "react";
import './SettingsDisplay.css'
import {SettingsInput} from "./SettingsInput/SettingsInput";

export function SettingsDisplay() {

    let [value, setValue] = useState({
        max: 1,
        min: 0
    })

    return (
        <div className={'settings-display__wrapper'}>
            <SettingsInput title={'max value'} value={value.max}/>
            <SettingsInput title={'min value'} value={value.min}/>
        </div>
    )
}
