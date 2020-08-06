import React, {useState} from "react";
import './Counter.css'

export function Counter() {

    let [count, setCount] = useState(0);

    const incCount = () =>{
        count++
        setCount(count)
    }
    const resetCount = () =>{
        setCount(0);
    }

    return(
        <div className={"count__wrapper"}>
            <div className={"count-num__box"}>
                <span className={"count-num__span"}><p className={count===5 ? "max-count":""}>{count}</p></span>
            </div>
            <div className={"count-button__box"}>
                <div className={"count-button__wrapper"}>
                    <button className={"count-button"} disabled={(count>=5)} onClick={incCount}>Inc</button>
                </div>
                <div className={"count-button__wrapper"}>
                    <button className={"count-button"}disabled={count===0} onClick={resetCount}>Reset</button>
                </div>
            </div>
        </div>
    )
}

