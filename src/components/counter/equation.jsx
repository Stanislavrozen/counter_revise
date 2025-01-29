import React, { useRef, useState } from 'react'
import './equation.css'
import Term from './term';
import Button from '../../UI/button/button';
import Input from '../../UI/input/input';

const Equation = () =>
{
    const [ terms, setTerms ] = useState([]);
    const [ sum, setSum ] = useState(0);

    function calculate()
    {
        setSum(terms.map(t => t.value).reduce((sum, val) => { return sum + val }))
    }

    function addTerm()
    {
        setTerms([ ...terms, { id: Date.now(), term: <Term />, value: 0 } ])
    }

    return (
        <div className='equation'>
            <div className='terms'>
                {
                    terms.map((t) =>
                    {
                        return <Term key={t.id} data={t} calculate={calculate} />
                    })
                }
            </div>
            <div className='sum'>
                <Input value={"= " + sum} />
            </div>
            <Button onClick={addTerm}>+ слагаемое</Button>
        </div>
    )
}

export default Equation