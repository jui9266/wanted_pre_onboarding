import React, { useCallback, useState } from 'react'
import './Tab.css'

const Tab = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const onclickTab = useCallback((e) => {
        setActiveIndex(Number(e.target.id))
    },[])

    return (
        <div className='tap'>
            <h1>Tab.js </h1>
            <div className="tapWrap">
                <ul>
                    <li onClick={onclickTab} id="0" className={activeIndex === 0 ? 'active' : ''} >감자</li>
                    <li onClick={onclickTab} id="1" className={activeIndex === 1 ? 'active' : ''} >고구마</li>
                    <li onClick={onclickTab} id="2" className={activeIndex === 2 ? 'active' : ''} >카레라이스</li>
                </ul>
                <div className={`line active${activeIndex}`}></div>
            </div>
        </div>
    )
}

export default Tab
