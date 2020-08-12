import React from "react";
import './CountDisplay.css'

type CountDisplayPropsType = {
    minCount: number
    maxCount: number
}

export function CountDisplay(props: CountDisplayPropsType) {
    return (
        <span className={"count-num__span"}><p
            className={props.minCount === props.maxCount ? "max-count" : ""}>{props.minCount}</p></span>
    )
}
