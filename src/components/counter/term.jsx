import React, { useState } from 'react'
import Button from '../../UI/button/button'
import Input from '../../UI/input/input';

const Term = ({ data, calculate }) =>
{
    const [ value, setValue ] = useState(0);

    function onChange(direction)
    {
        if (!direction) return;

        const newValue = value + (direction < 0 ? +1 : -1)

        setValue(newValue)
        data.value = newValue
        calculate()
    }
    return (
        <div className='term'>
            <Input onWheel={
                (e) =>
                {
                    onChange(e.deltaY)
                }
            }
            value={(value >= 0) ? "+ " + value.toString() : "- " + Math.abs(value.toString())}
            ></Input>
        </div>
    )
}

export default Term