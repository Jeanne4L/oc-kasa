import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

/**
 * @component
 * @param {*} props
 * @param {number} rental.id - rental id
 * @param {string} rental.cover - main rental image source
 * @param {string} rental.title - rental title
 * @returns {JSX.Element} -
 */

function Card({rental}) {
  return (
    <Link to={`/rental/${rental.id}`} className={styles.link}>
      <figure className={styles.card}>
        <img src={rental.cover} alt={rental.title} />
        <figcaption>{rental.title}</figcaption>
      </figure>
    </Link>
  )
}

export default Card
