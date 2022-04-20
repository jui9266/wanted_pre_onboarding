import React, { useCallback, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons'

import './Dropdown.css'

const Dropdown = () => {
    const data = ['All Symbols', 'Lorem', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'Neque', 'iste', 'dicta', 'optio', 'consequatur', 'ex', 'expedita', 'numquam', 'quas', 'eos', 'ipsa', 'blanditiis', 'saepe', 'nisi', 'quisquam', 'obcaecati', 'officia', 'esse', 'at', 'iusto', 'ea', 'non']
    const [selectVal, setSelectVal] = useState('All Symbols')
    const [searchVal, setSearchVal] = useState('')
    const [optionBox, setOtionBox] = useState(false)
    const [filterData, setfilterData] = useState([])

    const toggleBox = useCallback(() => {
        setOtionBox(!optionBox)
    }, [optionBox])

    const onchangeSearchVal = useCallback((e) => {
        const value = e.target.value
        setSearchVal(value)
        filterD(value)
    },[])

    const filterD = useCallback((value) => {
        const copyData = data.filter(el => el.match(new RegExp(value, "i")))
        setfilterData(copyData)
    },[])

    const onclickSelectBox =useCallback((e)=>{
        setSelectVal(e.target.dataset.value)
        setSearchVal('')
        setOtionBox(false)
    },[])

    return (
        <div className='dropdown'>
            <h1>Dropdown.js </h1>
            <div onClick={toggleBox} className='selecValueWrap'>
                <p>{selectVal}</p>
                <FontAwesomeIcon className='icon' icon={faCaretDown} />
            </div>

            {optionBox &&
                <div className='optionBox'>
                    <div className='inputWrap'>
                        <FontAwesomeIcon className='Searchicon' icon={faSearch} />
                        <input type='text' value={searchVal} onChange={onchangeSearchVal} placeholder="Search Symbol" />
                    </div>
                    <div className='selectBox' >
                        {searchVal.length == 0
                            ? data.map((el, idx) =>
                                <p className='selectItem' onClick={onclickSelectBox} data-value={el} key={el}>{el}</p>
                            )
                            : filterData.map((el, idx) =>
                                <p className='selectItem' onClick={onclickSelectBox} data-value={el} key={el}>{el}</p>
                            )}
                    </div>

                </div>
            }


        </div>
    )
}

export default Dropdown
