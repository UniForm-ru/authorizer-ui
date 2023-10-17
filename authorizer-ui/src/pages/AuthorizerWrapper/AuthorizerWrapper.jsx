import { useState } from 'react'
import style from './AuthorizerWrapper.module.css'
import { Link } from 'react-router-dom'

export const AuthorizerWrapper = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false)

  
  return (
    <div className={style.wrapper}>
        <div className={style.container}>
            <div className={style.logo}>
                <img src="/logo.svg" alt="logo" />
            </div>
            <div>
                <input 
                    className={style.input} 
                    placeholder='Телефон / email'
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                />
            </div>
            <div>
                <input 
                    className={style.input} 
                    type='password'
                    placeholder='Пароль'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className={style.restore}>Восстановить пароль</div>
            <Link to={'/student'}>
                <div className={style.button}>Войти</div>
            </Link>
        </div>
    </div>
  )
}