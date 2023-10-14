import { StudentPageInfo } from '../StudentPageInfo/StudentPageInfo'
import style from './StudentPage.module.css'
//импорт студента заменить на получене того же файла с бэка
import {student} from './StudentInfo.js'
import { Modal } from '../Modal/Modal'
import { useState } from 'react'

export const StudentPage = () => {

  const [modalActive, setModalActive] = useState(false)

  return (
    <div className={style.wrapper}>
        <div className={style.container}>
            <header>
                <div className={style.logo}>logo</div>
                <div className={style.univercity}>{student.univercity}</div>
            </header>
            <main>
              <div className={style.top__container}>
                <div className={style.info}>
                    <StudentPageInfo title={'ФИО студента'} spaceValue={`${student.userName.surname} 
                                                                         ${student.userName.name} 
                                                                         ${student.userName.lastName}`}/>
                    <StudentPageInfo title={'Номер студенческого билета'} spaceValue={student.id}/>
                    <StudentPageInfo title={'Направление / группа'} spaceValue={`${student.studyGroup.group} / 
                                                                                 ${student.studyGroup.groupReduct}`}/>
                </div>
                <div className={style.photo} style={{backgroundImage:`url(${student.photo})`}}/>
              </div>
              <div className={style.bottom__container}>
                  <StudentPageInfo title={'Дата рождения'} spaceValue={student.birthDay}/>
                  <StudentPageInfo title={'Действителен до'} spaceValue={student.validUntil}/>
              </div>
              <div className={style.reset__request}><button>Отправить запрос на изменение данных</button></div>
            </main>
            <footer className={style.footer}>
              <div className={style.footer__content}>
                <div className={style.qr} style={{backgroundImage:`url(${student.qr})`}}/>
                <div className={style.login}>login</div>
              </div>
              <button onClick={() => setModalActive(true)}>Меню</button>
            </footer>
        </div>
        <Modal active={modalActive} setActive={setModalActive}/>
    </div>
  )
}
