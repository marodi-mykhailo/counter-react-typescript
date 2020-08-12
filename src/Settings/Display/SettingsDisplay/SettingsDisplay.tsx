import React, {useState} from "react";
import './SettingsDisplay.css'
import {SettingsInput} from "./SettingsInput/SettingsInput";

type SettingsDisplayPropsType = {
    updateMaxCount: (maxValue: number) => void
    updateMinCount: (minValue: number) => void
    setInputActive:(inputFocusValue: boolean) => void
    error: boolean
}

export function SettingsDisplay(props: SettingsDisplayPropsType) {

    const inputOnChange = (id: string, value: number) => {
        if (id === 'max') {
            props.updateMaxCount(value)
        } else {
            props.updateMinCount(value)
        }
    }

    // localStorage.setItem('valueLocalStorage', JSON.stringify(values))


    return (
        <div className={'settings-display__wrapper'}>
            <SettingsInput  id={'max'} title={'max value'} updateMaxCount={props.updateMaxCount}
                           updateMinCount={props.updateMinCount} inputOnChange={inputOnChange} defoltValue={Number(localStorage.getItem('maxValue'))}
                           setInputActive={props.setInputActive}
                           error={props.error}
            />
            <SettingsInput id={'min'} title={'min value'} updateMaxCount={props.updateMaxCount}
                           updateMinCount={props.updateMinCount} inputOnChange={inputOnChange} defoltValue={Number(localStorage.getItem('minValue'))}
                           setInputActive={props.setInputActive}
                           error = {props.error}
            />
        </div>
    )
}
