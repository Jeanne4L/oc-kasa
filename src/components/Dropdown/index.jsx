import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import styles from './styles.module.scss'

/**
 * @component
 * @param {*} props
 * @param {string} title - rental title
 * @param {string} [paragraphText] - dropdown description
 * @param {Array<string>} [list] - rental available equipment
 * @returns {JSX.Element} - collapsible element
 */

const Dropdown = ({title, children}) => {
  const [open, setOpen] = useState(false)

  let url = useLocation()

  function toggle() {
    setOpen(!open)
  }

  return (
    <div
      className={`${styles.dropdown} ${
        url.pathname === '/about'
          ? styles.about_dropdown
          : styles.rental_dropdown
      }`}
    >
      <div className={`${styles.dropdown__title}`}>
        <p>{title}</p>
        <i
          className={`fa-solid fa-chevron-up ${styles.dropdown__btn} ${open ? styles.btn_up : ''}`}
          onClick={toggle}
        ></i>
      </div>

      <div className={`${styles.dropdown__text} ${open ? styles.down : ''}`}>
        <div className={styles.dropdown__content}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Dropdown
