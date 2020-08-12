import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import Settings from "./Settings/Settings";


function App() {

    let newValues = {
        max: Number(localStorage.getItem('maxValue')),
        min: Number(localStorage.getItem('minValue'))
    }



    let [maxCount, setMaxCount] = useState(Number(localStorage.getItem('maxValue')));
    let [minCount, setMinCount] = useState(Number(localStorage.getItem('minValue')));

    const incCount = () => {
        minCount++
        setMinCount(minCount)
    }
    const resetCount = () => {
        setMinCount(newValues.min);
    }

    let [inputFocus, setInputFocus] = useState(false)
    const setInputActive = (inputFocusValue: boolean) =>{
        setInputFocus(inputFocusValue)
    }

    const setMaxMinValue = () =>{
        setMaxCount(newValues.max)
        setMinCount(newValues.min)
    }
    const updateMaxCount = (maxValue: number) =>{
        newValues.max = maxValue;
        localStorage.setItem('maxValue', String(maxValue))
    }

    const updateMinCount = (minValue: number) => {
        newValues.min = minValue
        localStorage.setItem('minValue', String(minValue))
    }


    return (
        <div className={"container app__wrapper"}>
            <Settings
                minCount={minCount}
                maxCount={maxCount}
                updateMaxCount={updateMaxCount}
                updateMinCount={updateMinCount}
                setMaxMinValue = {setMaxMinValue}
                setInputActive = {setInputActive}
                inputFocus={inputFocus}
            />
            <Counter
                minCount={minCount}
                maxCount={maxCount}
                incCount={incCount}
                resetCount={resetCount}
                inputFocus={inputFocus}
            />
        </div>
    )
}

export default App;
