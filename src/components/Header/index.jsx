import { Link, useLocation } from 'react-router-dom'
import logo from '../../images/logo.png'
import styles from './styles.module.css'

function Header() {
  let url = useLocation()
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.header__container}`}>
        <Link to="/">
          <img
            src={logo}
            alt="Mot Kasa avec une maison à la place du a"
            className={`${styles.header__logo}`}
          />
        </Link>

        <nav>
          <ul>
            <li>
              <Link
                to="/"
                className={
                  url.pathname === '/' ? `${styles.header__active}` : ''
                }
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={
                  url.pathname === '/about' ? `${styles.header__active}` : ''
                }
              >
                À propos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
