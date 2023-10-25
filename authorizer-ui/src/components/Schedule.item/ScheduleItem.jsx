/* eslint-disable react/prop-types */
import { useState } from 'react'
import style from './ScheduleItem.module.css'

export const ScheduleItem = ({ type, time, subject, location, teacher }) => {

  const [text, setText] = useState("");
  const [isRotate, setIsRotate] = useState(false)
  const maxChars = 212;

  const handleInputChange = (e) => {
    const inputText = e.target.value;

    if (inputText.length <= maxChars) {
      setText(inputText);
    }
  };

   return (type != 'окно'?(
    
    <div className={style.main_container}>
      <div className={!isRotate? style.front: style.front__rotate}>
        <div className={style.subject__container}>
          <div className={style.inner__constainer}>
              <span className={type == 'практика'? style.type__lect: style.type__sem}>{type}</span>
              <span className={style.time}>{time.start} - {time.end}</span>
          </div>
          <div className={style.subject}>{subject}</div>
          <div className={style.location}>
              <span className={style.location__building}>{location.building} корпус</span>
              <span className={style.location__classroom}>{location.classroom} аудитория</span>
          </div>
          <div className={style.inner__constainer}>
            <p className={style.taecher}>Преподаватель {teacher}</p>
            <img onClick={() => setIsRotate(true)} className={style.edit__image} src="/edit.svg" alt="logo" />
          </div>
        </div>
      </div>
      <div className={!isRotate? style.back: style.back__rotate}>
        <textarea 
          value={text}
          placeholder="Место для заметок"
          onChange={handleInputChange}
        />
        <img onClick={() => setIsRotate(false)} className={style.back__image} src="/back.svg" alt="logo" />
      </div>
    </div>
  )
  : <>
    <div className={style.subject__container}>
      <div className={style.gap__container}>
        <img className={style.gap__image} src="/gap.svg" alt="logo" />
        <p className={style.subject}>{type}</p>
      </div>
    </div>
  </>)
}