/* eslint-disable react/prop-types */
import style from './SudebarMenuItem.module.css'
import { Link } from 'react-router-dom'

export const SidebarMenuItem = ({item, active}) => {
  return (
    <div className={active? style.item__active: style.item}>
        <Link to={item.path}>
            <div className={style.item__icon}><img src={`${item.icon}`} alt="icon" /></div>
            <div className={active? style.item__label__active: style.item__label}>{item.label}</div> 
        </Link>       
    </div>
  )
}
