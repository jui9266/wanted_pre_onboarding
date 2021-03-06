import React, { useCallback, useState } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faEye, faEyeSlash, } from '@fortawesome/free-solid-svg-icons'

import './Input.css'

const Input = () => {

  const [emailValue, setemailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [emailCheck, setEmailCheck] = useState(false)
  const [passwordMode, setPasswordMode] = useState(true)

  const onChangeEmail = useCallback((e) => {
    const v = e.target.value
    const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

    setemailValue(v)
    regEmail.test(v) === true ? setEmailCheck(true) : setEmailCheck(false)
  }, [emailValue])

  const onChangePassword = useCallback((e) => {
    setPasswordValue(e.target.value)
  }, [passwordValue])

  const togglePasswordMode = useCallback((e) => {
    setPasswordMode(!passwordMode)
  }, [passwordMode])

  return (

    <div className='input'>
      <h1>Input.js </h1>
      <h2>E-mail</h2>
      <div>
        <div className='inputBoxWrap'>
          <input className='inputBox' type='email' value={emailValue} onChange={onChangeEmail} placeholder="E-mail" />
          <FontAwesomeIcon className={emailCheck ? 'icon right' : 'icon'} icon={faCircleCheck} />
          {emailValue.length > 0 && !emailCheck && <p className='alert'>이메일 형식을 확인해주세요.</p>}
        </div>
      </div>
      <h2>Password</h2>
      <div>
        <div className='inputBoxWrap'>
          <input className='inputBox' type={passwordMode ? 'password' : 'text'} value={passwordValue} onChange={onChangePassword} placeholder="Password" />
          <FontAwesomeIcon onClick={togglePasswordMode} className="icon" icon={passwordMode ? faEyeSlash : faEye} />
        </div>
      </div>
    </div>
  )
}

export default Input
