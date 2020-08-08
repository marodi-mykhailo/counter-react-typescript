import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";

export type displayType = 'count' | 'settings'


function App() {

    let [maxCount, setMaxCount] = useState(8);
    let [minCount, setMinCount] = useState(4);
    let [disable, setDisable] = useState(false)
    const incCount = () => {
        minCount++
        setMinCount(minCount)
    }
    const resetCount = () => {
        setMinCount(4);
    }


    const setMaxMinValue = (maxValue: number, minValue: number) =>{
        setMaxCount(maxValue)
        setMinCount(minValue)
    }
    const updateMaxCount = (maxValue: number) =>{
        setMaxCount(maxValue)
    }

    const updateMinCount = (minValue: number) => {
        setMinCount(minValue)
    }


    return (
        <div className={"container app__wrapper"}>
            <Counter
                minCount={minCount}
                maxCount={maxCount}
                display={'settings'}
                incCount={incCount}
                resetCount={resetCount}
                setMinMaxValue = {setMaxMinValue}
                updateMaxCount={updateMaxCount}
                updateMinCount={updateMinCount}
            />
            <Counter
                minCount={minCount}
                maxCount={maxCount}
                display={'count'}
                incCount={incCount}
                resetCount={resetCount}
                setMinMaxValue = {setMaxMinValue}
                updateMaxCount={updateMaxCount}
                updateMinCount={updateMinCount}
            />
        </div>
    )
}

export default App;
