import { useLocation } from 'react-router-dom'
import styles from './styles.module.css'

function Banner({ image, paragraphText }) {
    let url = useLocation()
    return (
        <div
            className={`${styles.banner}
        ${url.pathname === '/' ? styles.small_banner : styles.large_banner}`}
        >
            <img src={image} alt="paysage" />
            {/* This component can have a paragraph */}
            {paragraphText && <p>{paragraphText}</p>}
        </div>
    )
}

export default Banner
