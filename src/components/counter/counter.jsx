import React, { useState } from 'react'
import Button from '../../UI/button/button'

const Counter = () =>
{
    const [value, setValue] = useState(0);

    return (
        <div className='counter'>
            <h1>{value}</h1>
            <div className='controls'>
                <Button onClick={() => { setValue(value - 1) }}>-</Button>
                <Button onClick={() => { setValue(value + 1) }}>+</Button>
            </div>
        </div>
    )
}

export default Counter