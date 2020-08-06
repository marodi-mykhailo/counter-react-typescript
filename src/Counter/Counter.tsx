import React, {useState} from "react";
import './Counter.css'
import {CountButton} from "./Button/CountButton";


type CounterPropsType = {
    count: number
    incCount: () => void
    resetCount: () => void
}

export function Counter(props: CounterPropsType) {

    return (
        <div className={"count__wrapper"}>
            <div className={"count-num__box"}>
                <span className={"count-num__span"}><p
                    className={props.count === 5 ? "max-count" : ""}>{props.count}</p></span>
            </div>
            <div className={"count-button__box"}>
                <CountButton
                    title={'Inc'}
                    count={props.count}
                    buttonAction={props.incCount}
                    disabled={props.count >= 5}/>
                <CountButton
                    title={'Reset'}
                    count={props.count}
                    buttonAction={props.resetCount}
                    disabled={props.count === 0}/>
            </div>
        </div>
    )
}

