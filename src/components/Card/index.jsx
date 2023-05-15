import { Link } from 'react-router-dom'
import styles from '../../styles/card.module.css'

function Card({ location }) {
    return (
        <Link to={`/location/${location.id}`} className={styles.link}>
            <figure className={styles.card}>
                <img src={location.cover} alt={location.title} />
                <figcaption>{location.title}</figcaption>
            </figure>
        </Link>
    )
}

export default Card
