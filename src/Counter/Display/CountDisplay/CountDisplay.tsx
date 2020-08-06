import React from "react";
import './CountDisplay.css'

type CountDisplayPropsType = {
    count: number
}

export function CountDisplay(props: CountDisplayPropsType) {
    return (
        <span className={"count-num__span"}><p
            className={props.count === 5 ? "max-count" : ""}>{props.count}</p></span>
    )
}
