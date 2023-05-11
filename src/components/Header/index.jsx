import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

function Header() {
    return (
        <header>
            <img src={logo} alt="Mot Kasa avec une maison à la place du a" />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">À propos</Link>
            </nav>
        </header>
    )
}

export default Header
