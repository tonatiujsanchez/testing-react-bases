import { useState } from "react"

import PropTypes from "prop-types"


export const CounterApp = ({ value }) => {
    
    const [ counter, setCounter ] = useState( value )

    const handleAdd = ( worth ) => {
        setCounter( counter + worth )
    }



    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            
            <button
                onClick={ ()=> handleAdd( -1 )} 
                className="btn"
                style={{
                    marginRight: '15px'
                }}
            >
                -1
            </button>
            <button
                onClick={ ()=> handleAdd( 1 )} 
                className="btn"
                style={{
                    marginRight: '15px'
                }}
            >
                +1
            </button>

            <button
                aria-label='btn-reset'
                onClick={ ()=> setCounter(value) } 
                className="btn"
            >
                Reset
            </button>
        </>
    )
}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
