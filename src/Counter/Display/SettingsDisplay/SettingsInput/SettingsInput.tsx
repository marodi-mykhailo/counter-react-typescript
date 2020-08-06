import React, {ChangeEvent} from "react";
import './SettingsInput.css'

type SettingsInputPropsType = {
    id: string
    title: string
    updateMaxCount: (maxValue: number) => void
    updateMinCount: (minValue: number) => void
    inputOnChange: (id: string, value: number) => void
}

export function SettingsInput(props: SettingsInputPropsType) {
    const  onChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        props.inputOnChange(props.id, Number(e.currentTarget.value))
    }
    return(
        <div className={"setting-input__wrapper"}>
            <p className={"setting-input__text"}>{props.title}: </p>
            <input className={"setting-input__input"} type={"number"} onChange={onChangeHandler} />
        </div>
    )
}
