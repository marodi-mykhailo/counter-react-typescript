import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";

export type displayType = 'count'| 'settings'

function App() {

    let [count, setCount] = useState(0);

    const incCount = () => {
        count++
        setCount(count)
    }
    const resetCount = () => {
        setCount(0);
    }

    return (
        <div className={"container app__wrapper"}>
            <Counter
                count={count}
                display={'settings'}
                incCount={incCount}
                resetCount={resetCount}
            />
            <Counter
                count={count}
                display={'count'}
                incCount={incCount}
                resetCount={resetCount}
            />
        </div>
    )
}

export default App;
