import React from "react";
import './Counter.css'
import {CountButton} from "./Button/CountButton";
import {CountDisplay} from "./Display/CountDisplay/CountDisplay";
import {displayType} from "../App";
import {SettingsDisplay} from "./Display/SettingsDisplay/SettingsDisplay";


type CounterPropsType = {
    minCount: number
    maxCount: number
    display: displayType
    incCount: () => void
    resetCount: () => void
    updateMaxCount: (maxValue:number) => void
    updateMinCount: (minValue: number) => void
}

export function Counter(props: CounterPropsType) {

    return (
        <div className={"count__wrapper"}>
            <div className={"count-num__box"}>
                {props.display === 'count' ? <CountDisplay minCount={props.minCount} maxCount={props.maxCount} updateMaxCount={props.updateMaxCount} updateMinCount={props.updateMinCount}/> : <SettingsDisplay updateMaxCount={props.updateMaxCount} updateMinCount={props.updateMinCount}/>}
            </div>
            <div className={"count-button__box"}>
                {props.display === 'count' ? <div className={"count-button__box__wrapper"}><CountButton
                    title={'Inc'}
                    minCount={props.minCount}
                    maxCount = {props.maxCount}
                    buttonAction={props.incCount}
                    disabled={props.minCount >= props.maxCount}/>
                    <CountButton
                        title={'Reset'}
                        minCount={props.minCount}
                        maxCount = {props.maxCount}
                        buttonAction={props.resetCount}
                        disabled={props.minCount === 0}/></div> : <CountButton
                    title={'Set'}
                    minCount={props.minCount}
                    maxCount = {props.maxCount}
                    buttonAction={props.incCount}
                    disabled={props.minCount >= props.maxCount}/>}

            </div>
        </div>
    )
}

