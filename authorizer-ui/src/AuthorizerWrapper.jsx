import { useState } from 'react'
import style from './AuthorizerWrapper.module.css'

export const AuthorizerWrapper = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')



  return (
    <div className={style.wrapper}>
        <div className={style.container}>
            <div className={style.logo}>
                <img src="/logo.svg" alt="logo" />
            </div>
            <div>
                <input className={style.input} placeholder='Телефон / email'/>
            </div>
            <div>
                <input className={style.input} placeholder='Пароль'/>
            </div>
            <div className={style.restore}>Восстановить пароль</div>
            <div className={style.button}>Войти</div>
        </div>
    </div>
  )
}