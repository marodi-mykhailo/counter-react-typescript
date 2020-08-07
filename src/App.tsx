import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";

export type displayType = 'count' | 'settings'


function App() {

    let [maxCount, setMaxCount] = useState(8);
    let [minCount, setMinCount] = useState(4);

    const incCount = () => {
        minCount++
        setMinCount(minCount)
    }
    const resetCount = () => {
        setMinCount(4);
    }

    const setMaxMinValue = (maxValue: number, minValue: number) =>{
        setMinCount(minValue)
        setMaxCount(maxValue)
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

            />
            <Counter
                minCount={minCount}
                maxCount={maxCount}
                display={'count'}
                incCount={incCount}
                resetCount={resetCount}

                setMinMaxValue = {setMaxMinValue}
            />
        </div>
    )
}

export default App;
