import React, {useState} from "react";
import './Counter.css'
import {CountButton} from "./Button/CountButton/CountButton";
import {CountDisplay} from "./Display/CountDisplay/CountDisplay";
import {useDispatch, useSelector} from "react-redux";
import {incrementValue, resetValue} from "../state/counter-reducer";
import {AppRootStateType} from "../state/store";


type CounterPropsType = {
    inputFocus: boolean
    error: boolean
}

export function Counter(props: CounterPropsType) {
    let dispatch = useDispatch()

    const onIncrementButton = () =>{
        dispatch(incrementValue())
    }
    const onResetButton = () => {
        dispatch(resetValue())
    }

    const minValue = useSelector<AppRootStateType, any>(state => state.minValue)
    const maxValue = useSelector<AppRootStateType, any>(state => state.maxValue)


    return (
        <div className={"count__wrapper"}>
            <div className={"count-num__box"}>
                <CountDisplay minValue={minValue} maxValue={maxValue} inputFocus={props.inputFocus} error={props.error}/>
            </div>
            <div className={"count-button__box"}>
                <div className={"count-button__box__wrapper"}>
                    <CountButton
                        title={'Inc'}
                        buttonAction={onIncrementButton}
                        disabled={minValue >= maxValue}
                        inputFocus={props.inputFocus}
                        error = {props.error}/>

                    <CountButton
                        title={'Reset'}
                        buttonAction={onResetButton}
                        disabled={minValue === 0}
                        inputFocus={props.inputFocus}
                        error = {props.error}
                    />
                </div>
            </div>
        </div>
    )
}

