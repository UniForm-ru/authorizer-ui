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
            path: '*',
            icon: '',
            label: 'Мессенджер',
        },
        {
            path: '/student', 
            icon: '/schedule.svg',
            icon_active: '/schedule_active.svg',
            label:'Личный кабинет',
        }, 
        {
            path: '/shedule', 
            icon: '/schedule.svg',
            icon_active: '/schedule_active.svg',
            label:'Расписание',
        },
        {
            path: '/', 
            icon: '/events.svg',
            icon_active: '/events_active.svg',
            label:'События',
        },
        {
            path: '/', 
            icon: '/studies.svg',
            icon_active: '/studies_active.svg',
            label:'Учебные материалы',
        },
        {
            path: '/', 
            icon: '/map.svg',
            icon_active: '/map_active.svg',
            label:'Карта',
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
