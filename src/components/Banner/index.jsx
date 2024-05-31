import { useLocation } from 'react-router-dom'

import styles from './styles.module.scss'

/**
 * @component
 * @param {*} props
 * @param {string} props.image - background image source
 * @param {string} [props.paragraphText] - business slogan
 * @returns
 */

function Banner(props) {
  let url = useLocation()
  return (
    <div
      className={`${styles.banner}
        ${url.pathname === '/' ? styles.home_banner : styles.about_banner}`}
    >
      <img src={props.image} alt="paysage" />
      {/* This component can contain text */}
      {props.firstParagraphText && (
        <div className={styles.banner__text}>
          <p>{props.firstParagraphText}</p>
          <p>{props.secondParagraphText}</p>
        </div>
      )}
    </div>
  )
}

export default Banner
