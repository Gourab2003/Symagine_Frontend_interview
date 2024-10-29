//! This is the Counter page

import React, {useState} from 'react'

function Counter() {
const [count, setCount] = useState(0)
const handleIncrement = ()=>{
    setCount(prev => prev+1)
}

  return (

    <div>
        <h3>Count: {count}</h3>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Counter