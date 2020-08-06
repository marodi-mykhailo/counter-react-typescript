import React from "react";
import './Counter.css'
import {CountButton} from "./Button/CountButton";
import {CountDisplay} from "./Display/CountDisplay/CountDisplay";
import {displayType} from "../App";
import {SettingsDisplay} from "./Display/SettingsDisplay/SettingsDisplay";


type CounterPropsType = {
    count: number
    display: displayType
    incCount: () => void
    resetCount: () => void
}

export function Counter(props: CounterPropsType) {

    return (
        <div className={"count__wrapper"}>
            <div className={"count-num__box"}>
                {props.display === 'count' ? <CountDisplay count={props.count}/> : <SettingsDisplay/>}
            </div>
            <div className={"count-button__box"}>
                {props.display === 'count' ? <div className={"count-button__box__wrapper"}><CountButton
                    title={'Inc'}
                    count={props.count}
                    buttonAction={props.incCount}
                    disabled={props.count >= 5}/>
                    <CountButton
                        title={'Reset'}
                        count={props.count}
                        buttonAction={props.resetCount}
                        disabled={props.count === 0}/></div> : <CountButton
                    title={'Set'}
                    count={props.count}
                    buttonAction={props.incCount}
                    disabled={props.count >= 5}/>}

            </div>
        </div>
    )
}

