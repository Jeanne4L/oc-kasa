import { useLocation } from 'react-router-dom'
import styles from '../../styles/banner.module.css'

function Banner({ image, paragraphText }) {
    let url = useLocation()
    return (
        <div
            className={`${styles.banner}
        ${url.pathname === '/' ? styles.small_banner : styles.large_banner}`}
        >
            <img src={image} alt="paysage" />
            {paragraphText && <p>{paragraphText}</p>}
        </div>
    )
}

export default Banner
