import React, { useState } from 'react'
import './Slider.css'


const Slider = () => {
    const [rangeVal, setRangeVal] = useState(30)
    const quickValue = [0, 25, 50, 75, 100]

    const onchangeRangeVal = (e) => {
        setRangeVal(e.target.value)
    }

    const onclickQuickValue = (e) =>{
        setRangeVal(e.target.id)
    }

    return (
        <div className='slider'>
            <h1>Slider.js </h1>
            <div className="sliderWrap">
                <div className='rangeVal'>
                    <p>{rangeVal}</p>
                </div>
                <input type='range' value={rangeVal} onChange={onchangeRangeVal}></input>
                <div className='quickValueWrap'>
                    {quickValue.map((el, idx) => (
                        <div className={`quickValueBtn`}>
                            <p onClick={onclickQuickValue} id={el} >{el}%</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Slider