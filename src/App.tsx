import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";



function App() {

  let [count, setCount] = useState(0);

  const incCount = () =>{
    count++
    setCount(count)
  }
  const resetCount = () =>{
    setCount(0);
  }

  return (
    <Counter
    count={count}
    incCount={incCount}
    resetCount={resetCount}
    />
  )
}

export default App;
