import React from 'react'
import { useState } from 'react'

function Ex5(prps) {
    const [num, setNum] = useState(0)
    
    const addOne = () => {
        //SetNum(1)
        setNum(num+1)
    }

    return (
        <div>
            <h3>State and Handler</h3>
            <h2> number = { number.num}</h2>
            <button onClick={() => addOne()}> Add + 1 </button>
        </div>
    )
}
export default Ex5