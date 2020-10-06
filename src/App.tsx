import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import Settings from "./Settings/Settings";

function App() {

    let [maxCount, setMaxCount] = useState(Number(localStorage.getItem('maxValue')));
    let [minCount, setMinCount] = useState(Number(localStorage.getItem('minValue')));
    let [error, setError] = useState(false)

    let newValues = {
        max: Number(localStorage.getItem('maxValue')),
        min: Number(localStorage.getItem('minValue'))
    }



    let [inputFocus, setInputFocus] = useState(false)
    const setInputActive = (inputFocusValue: boolean) => {
        setInputFocus(inputFocusValue)
    }

    const setMaxMinValue = () => {
        setMaxCount(newValues.max)
        setMinCount(newValues.min)
    }

    const updateMaxCount = (maxValue: number) => {
        newValues.max = maxValue;
        if (newValues.max >= 0 && newValues.max > newValues.min) {
            localStorage.setItem('maxValue', String(maxValue))
            setError(false)
        } else {
            setError(true)
        }

    }

    const updateMinCount = (minValue: number) => {
        newValues.min = minValue
        if (newValues.min >= 0 && newValues.min < newValues.max) {
            localStorage.setItem('minValue', String(minValue))
            setError(false)
        } else {
            setError(true)
        }
    }


    return (
        <div className={"container app__wrapper"}>
            <Settings
                minCount={minCount}
                maxCount={maxCount}
                updateMaxCount={updateMaxCount}
                updateMinCount={updateMinCount}
                setMaxMinValue={setMaxMinValue}
                setInputActive={setInputActive}
                inputFocus={inputFocus}
                error={error}
            />
            <Counter
                inputFocus={inputFocus}
                error={error}
            />
        </div>
    )
}

export default App;
