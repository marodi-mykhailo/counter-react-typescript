import React from "react";
import './CountDisplay.css'

type CountDisplayPropsType = {
    minCount: number
    maxCount: number
    inputFocus: boolean
}

export function CountDisplay(props: CountDisplayPropsType) {
    return (
        <div>
            {props.inputFocus ? <p className={"count-num__span count-second-text"}>enter values and press 'Set'</p> :
                <span className={"count-num__span"}>
            <p className={props.minCount === props.maxCount ? "max-count" : ""}>{props.minCount}</p></span>}
        </div>
    )
}
