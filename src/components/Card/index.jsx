import { Link } from 'react-router-dom'
import styles from '../../styles/card.module.css'

function Card({ renting }) {
    return (
        <Link to={`/renting/${renting.id}`} className={styles.link}>
            <figure className={styles.card}>
                <img src={renting.cover} alt={renting.title} />
                <figcaption>{renting.title}</figcaption>
            </figure>
        </Link>
    )
}

export default Card
