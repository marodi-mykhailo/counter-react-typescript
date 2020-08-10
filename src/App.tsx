import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import Settings from "./Settings/Settings";
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
            <Settings/>
        </div>
    )
}

export default App;
