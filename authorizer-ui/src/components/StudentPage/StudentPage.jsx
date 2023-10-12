import style from './StudentPage.module.css'

export const StudentPage = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.container}>
            <header className={style.header}>
                <div className={style.logo}>logo</div>
                <div className={style.univercity}>uni</div>
            </header>
            <main className={style.main}>main</main>
        </div>
    </div>
  )
}
