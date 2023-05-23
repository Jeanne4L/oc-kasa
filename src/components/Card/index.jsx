import { Link } from 'react-router-dom'
import styles from './styles.module.css'

function Card(props) {
    return (
        <Link to={`/renting/${props.renting.id}`} className={styles.link}>
            <figure className={styles.card}>
                <img src={props.renting.cover} alt={props.renting.title} />
                <figcaption>{props.renting.title}</figcaption>
            </figure>
        </Link>
    )
}

export default Card
