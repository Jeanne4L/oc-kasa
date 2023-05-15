import { Link, useLocation } from 'react-router-dom'
import logo from '../../images/logo.png'

function Header() {
    let location = useLocation()
    return (
        <header>
            <div className="container">
                <img
                    src={logo}
                    alt="Mot Kasa avec une maison à la place du a"
                />
                <nav>
                    <ul>
                        <li>
                            <Link
                                to="/"
                                className={
                                    location.pathname === '/' ? 'active' : ''
                                }
                            >
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className={
                                    location.pathname === '/about'
                                        ? 'active'
                                        : ''
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
