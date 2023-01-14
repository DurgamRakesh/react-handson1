import React from 'react'
import './Styles.css'

const Funcomponent = () => {
    return (
        <div className='fun1'>
            <h3>This is created using functional component</h3>
            <h4>This is done using external CSS</h4>
            <h5 style={{color:'purple'}}>This is done using inline CSS</h5>
        </div>
    )
}

export default Funcomponent