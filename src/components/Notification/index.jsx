
import css from './notification.module.css'

const Notification = ({ message }) => {
  return (
    <>
       <p className={css.notifyTitle}>{message}</p>
    </>
  )
}

export default Notification