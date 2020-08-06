import React from "react";
import './CountDisplay.css'

type CountDisplayPropsType = {
    minCount: number
    maxCount: number
    updateMaxCount: (maxValue: number) =>void
    updateMinCount: (minValue: number) => void
}

export function CountDisplay(props: CountDisplayPropsType) {
    let minMaxValue;
    /*const localStorageValue =  localStorage.getItem('valueLocalStorage');
    if(localStorageValue !== null){
          minMaxValue = JSON.parse(localStorageValue)
    }*/
    return (
        <span className={"count-num__span"}><p
            className={props.minCount === props.maxCount ? "max-count" : ""}>{props.minCount}</p></span>
    )
}
