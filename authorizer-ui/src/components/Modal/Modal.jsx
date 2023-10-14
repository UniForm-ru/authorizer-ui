/* eslint-disable react/prop-types */
import style from './Modal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export const Modal = ({active, setActive}) => {
  return (
    <div className={active? style.wrapper__active : style.wrapper} onClick={() => {setActive(false)}}>
        <div className={style.container} onClick={e => e.stopPropagation()}>
            <button className={style.close__button} onClick={() => {setActive(false)}}><FontAwesomeIcon icon={faTimes}/></button>
            <div className={style.logo}>
                <img src="/logo.svg" alt="logo" />
            </div>
            <div className={style.content}>
              <button className={style.button}>Чаты</button>
              <button className={style.button}>Студенческий билет</button>
            </div>
        </div>
    </div>
  )
}
