import React from "react";
import './CountDisplay.css'

type CountDisplayPropsType = {
    minValue: number
    maxValue: number
    inputFocus: boolean
    error: boolean
}

export function CountDisplay(props: CountDisplayPropsType) {
    return (
        <div>
            {props.error ? <p className={"count-num__span count-second-text error-message"}>Incorrect Value</p>: <div>{props.inputFocus ? <p className={"count-num__span count-second-text"}>enter values and press 'Set'</p> :
                <span className={"count-num__span"}>
                    <p className={props.minValue === props.maxValue ? "max-count" : ""}>{props.minValue}</p></span>}</div>  }

        </div>
    )
}
