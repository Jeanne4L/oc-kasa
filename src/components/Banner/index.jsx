import { useLocation } from 'react-router-dom'

import styles from './styles.module.scss'

/**
 * @component
 * @param {*} props
 * @param {string} image - background image source
 * @param {string} [paragraphText] - business slogan
 * @returns
 */

const Banner = ({image, firstParagraphText, secondParagraphText}) => {
  let url = useLocation()
  
  return (
    <div
      className={`${styles.banner}
        ${url.pathname === '/' ? styles.home_banner : styles.about_banner}`}
    >
      <img src={image} alt="paysage" />
      {/* This component can contain text */}
      {firstParagraphText && (
        <div className={styles.banner__text}>
          <p>{firstParagraphText}</p>
          <p>{secondParagraphText}</p>
        </div>
      )}
    </div>
  )
}

export default Banner
