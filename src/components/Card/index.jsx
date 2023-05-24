import { Link } from 'react-router-dom'
import styles from './styles.module.css'

/**
 * @component
 * @param {*} props
 * @param {number} props.rental.id - rental id
 * @param {string} props.rental.cover - main rental image source
 * @param {string} props.rental.title - rental title
 * @returns {JSX.Element} -
 */

function Card(props) {
    return (
        <Link to={`/rental/${props.rental.id}`} className={styles.link}>
            <figure className={styles.card}>
                <img src={props.rental.cover} alt={props.rental.title} />
                <figcaption>{props.rental.title}</figcaption>
            </figure>
        </Link>
    )
}

export default Card
