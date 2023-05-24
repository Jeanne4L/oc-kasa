import { Link, useLocation } from 'react-router-dom'
import logo from '../../images/logo.png'

function Header() {
    let url = useLocation()
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Mot Kasa avec une maison à la place du a"
                    />
                </Link>

                <nav>
                    <ul>
                        <li>
                            <Link
                                to="/"
                                className={url.pathname === '/' ? 'active' : ''}
                            >
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className={
                                    url.pathname === '/about' ? 'active' : ''
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
