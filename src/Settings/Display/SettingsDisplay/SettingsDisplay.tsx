import React, {useState} from "react";
import './SettingsDisplay.css'
import {SettingsInput} from "./SettingsInput/SettingsInput";
import {useDispatch} from "react-redux";
import {setMaxValue, setMinValue} from "../../../state/counter-reducer";

type SettingsDisplayPropsType = {
    updateMaxCount: (maxValue: number) => void
    updateMinCount: (minValue: number) => void
    setInputActive:(inputFocusValue: boolean) => void
    error: boolean
}

export function SettingsDisplay(props: SettingsDisplayPropsType) {

    let dispatch = useDispatch();

    const inputOnChange = (id: string, value: number) => {
        if (id === 'max') {
            dispatch(setMaxValue(value))
        } else {
            dispatch((setMinValue(value)))
        }
    }



    // localStorage.setItem('valueLocalStorage', JSON.stringify(values))

    return (
        <div className={'settings-display__wrapper'}>
            <SettingsInput  id={'max'} title={'max value'} inputOnChange={inputOnChange} defoltValue={Number(localStorage.getItem('maxValue'))}
                            setInputActive={props.setInputActive}
                            error={props.error}
            />
            <SettingsInput id={'min'} title={'min value'}
                           inputOnChange={inputOnChange} defoltValue={Number(localStorage.getItem('minValue'))}
                           setInputActive={props.setInputActive}
                           error = {props.error}
            />
        </div>
    )
}
