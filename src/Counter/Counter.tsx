import React, {useState} from "react";
import './Counter.css'
import {CountButton} from "./Button/CountButton/CountButton";
import {CountDisplay} from "./Display/CountDisplay/CountDisplay";


type CounterPropsType = {
    minCount: number
    maxCount: number
    incCount: () => void
    resetCount: () => void
}

export function Counter(props: CounterPropsType) {

    return (
        <div className={"count__wrapper"}>
            <div className={"count-num__box"}>
                <CountDisplay minCount={props.minCount} maxCount={props.maxCount}/>
            </div>
            <div className={"count-button__box"}>
                <div className={"count-button__box__wrapper"}>
                    <CountButton
                        title={'Inc'}
                        minCount={props.minCount}
                        maxCount={props.maxCount}
                        buttonAction={props.incCount}
                        disabled={props.minCount >= props.maxCount}/>
                    <CountButton
                        title={'Reset'}
                        minCount={props.minCount}
                        maxCount={props.maxCount}
                        buttonAction={props.resetCount}
                        disabled={props.minCount === 0}/>
                </div>
            </div>
        </div>
    )
}

