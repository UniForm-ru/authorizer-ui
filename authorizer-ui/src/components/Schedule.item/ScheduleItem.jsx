/* eslint-disable react/prop-types */
import style from './ScheduleItem.module.css'

export const ScheduleItem = ({ type, time, subject, location, teacher }) => {
  return (
    <div className={style.subject__container}>
        <div className={style.top__constainer}>
            <span className={type == 'практика'? style.type__lect: style.type__sem}>{type}</span>
            <span className={style.time}>{time.start} - {time.end}</span>
        </div>
        <div className={style.subject}>{subject}</div>
        <div className={style.location}>
            <span className={style.location__building}>{location.building} корпус</span>
            <span className={style.location__classroom}>{location.classroom} аудитория</span>
        </div>
        <div className={style.taecher}>Преподаватель {teacher}</div>
    </div>
  )
}
