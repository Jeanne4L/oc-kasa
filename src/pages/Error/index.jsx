import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

/**
 *
 * @returns {JSX.Element} - 404 page
 */

const Error = () => {
  return (
    <main className={styles.error}>
      <div className={styles.message}>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </main>
  )
}

export default Error
