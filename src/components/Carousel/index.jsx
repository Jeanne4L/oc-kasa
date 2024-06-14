import { useState, React } from 'react'

import styles from './styles.module.scss'

/**
 * @component
 * @param {*} props
 * @param {Array<string>} pictures - rental images sources
 * @returns {JSX.Element} - image carousel
 */

function Carousel({pictures}) {
  const [count, setCount] = useState(1)

  function limitCount() {
    if (count > pictures.length) {
      setCount(1)
    } else if (count < 1) {
      setCount(pictures.length)
    }
  }
  limitCount()

  for (let i = 0; i < pictures.length; i++) {
    return (
      <div className={styles.carousel}>
        <img src={pictures[count - 1]} alt="logement" />

        {/* Buttons and numbering are displayed if carousel have more than one picture */}
        {pictures.length > 1 && (
          <div>
            <span
              className={`material-symbols-outlined ${styles.back} ${styles.nav_btn}`}
              onClick={() => setCount(count - 1)}
            >
              arrow_back_ios_new
            </span>

            <span
              className={`material-symbols-outlined ${styles.next} ${styles.nav_btn}`}
              onClick={() => setCount(count + 1)}
            >
              arrow_forward_ios
            </span>

            <span className={styles.numbering}>
              {count}/{pictures.length}
            </span>
          </div>
        )}
      </div>
    )
  }
}

export default Carousel
