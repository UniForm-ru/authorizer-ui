import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { SidebarMenuItem } from '../SidebarMenuItem/SidebarMenuItem'
import style from './Sidebar.module.css'

export const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }

    const menuItems = [
        {
            path: '/student', 
            icon: '/schedule.svg',
            label:'Личный кабинет',
        }, 
        {
            path: '/shedule', 
            icon: '/schedule.svg',
            label:'Расписание',
        },
        {
            path: '/', 
            icon: '/schedule.svg',
            label:'Личный кабинет',
        }
    ];

  return (
    <div className={style.sidebar}>
        <div className={style.container}>
            <button className={style.open__close} onClick={toggleSidebar}><FontAwesomeIcon icon={faBars}/></button>
            <ul className={isOpen? style.menu__open: style.menu}>
                {menuItems.map((item, index) => (
                    <SidebarMenuItem 
                        key={index} 
                        item={item} 
                        active={window.location.pathname == item.path? true: false}
                    />
                ))}
            </ul>
        </div>
    </div>
  )
}
