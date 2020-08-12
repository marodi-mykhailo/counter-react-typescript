import React from "react";
import './CountDisplay.css'

type CountDisplayPropsType = {
    minCount: number
    maxCount: number
    inputFocus: boolean
    error: boolean
}

export function CountDisplay(props: CountDisplayPropsType) {
    return (
        <div>
            {props.error ? <p className={"count-num__span count-second-text error-message"}>Incorect Value</p>: <div>{props.inputFocus ? <p className={"count-num__span count-second-text"}>enter values and press 'Set'</p> :
                <span className={"count-num__span"}>
                    <p className={props.minCount === props.maxCount ? "max-count" : ""}>{props.minCount}</p></span>}</div>  }

        </div>
    )
}
