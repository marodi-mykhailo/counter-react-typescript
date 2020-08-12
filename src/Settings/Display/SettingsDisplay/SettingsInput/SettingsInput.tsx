import React, {ChangeEvent, useState, FocusEvent} from "react";
import './SettingsInput.css'

type SettingsInputPropsType = {
    id: string
    title: string
    updateMaxCount: (maxValue: number) => void
    updateMinCount: (minValue: number) => void
    inputOnChange: (id: string, Value: number) => void
    defoltValue: number
    setInputActive:(inputFocusValue: boolean) => void
    error: boolean
}

export function SettingsInput(props: SettingsInputPropsType) {
    let [inputFocus, setInputFocus] = useState(true)
    let [value, setValue] = useState(String(props.defoltValue))

    const  onChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        props.inputOnChange(props.id, Number(e.currentTarget.value))
        setValue(e.currentTarget.value)
    }

    const onFocusHandler = () =>{
        setInputFocus(false)
        props.setInputActive(inputFocus)
    }
    const onBlurHandler = () =>{
        setInputFocus(true)
        props.setInputActive(inputFocus)
    }

    return(
        <div className={"setting-input__wrapper"}>
            <p className={"setting-input__text"}>{props.title}: </p>
            <input className={props.error ? "setting-input__input warning-inputs" : "setting-input__input"} type={"number"} onChange={onChangeHandler} value={value} onFocus={onFocusHandler} onBlur={onBlurHandler}   />
        </div>
    )
}
