import React, { useCallback, useState } from 'react'
import './Toggle.css'

const Toggle = () => {

    const [toggleState, setToggleState] = useState(true)
    const onClickToggle = useCallback((e) =>{
        if(toggleState === e.target.id) return
        setToggleState(!toggleState)
    },[toggleState])

    return (
        <div className='toggle'>
            <h1>Toggle.js </h1>
            <div  className="toggleWrap">
                <div className={toggleState ? 'toggleActive l0' : 'toggleActive l50'}></div>
                <ul>
                    <li onClick={onClickToggle} id="1" className={toggleState ? 'active' : ''}>기본</li>
                    <li onClick={onClickToggle} id="0" className={!toggleState ? 'active' : ''}>상세</li>
                </ul>
            </div>
        </div>
    )
}

export default Toggle