import React from 'react'
import './input.css'

const Input = (props) =>
{
    return (
        <div class="col-3">
            <input className="effect-10" type="text" {...props} />
            <span class="focus-bg"></span>
        </div>
    )
}

export default Input