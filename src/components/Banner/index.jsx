import { useLocation } from 'react-router-dom'
import styles from './styles.module.css'

function Banner(props) {
    let url = useLocation()
    return (
        <div
            className={`${styles.banner}
        ${url.pathname === '/' ? styles.home_banner : styles.about_banner}`}
        >
            <img src={props.image} alt="paysage" />
            {/* This component can have a paragraph */}
            {props.paragraphText && <p>{props.paragraphText}</p>}
        </div>
    )
}

export default Banner
