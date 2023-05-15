import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

function Header() {
    return (
        <header>
            <img src={logo} alt="Mot Kasa avec une maison à la place du a" />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/about">À propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
