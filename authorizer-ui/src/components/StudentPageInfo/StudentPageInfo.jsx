import style from './StydentPageInfo.module.css'

// eslint-disable-next-line react/prop-types
export const StudentPageInfo = ({title, spaceValue}) => {
  return (
    <div>
        <div className={style.title}>{title}</div>
        <div className={style.text}>{spaceValue}</div>
    </div>
  )
}
