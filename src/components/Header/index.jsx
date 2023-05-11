import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <img
                src="./images/logo.png"
                alt="Mot Kasa avec une maison à la place du a"
            />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">À propos</Link>
            </nav>
        </header>
    )
}

export default Header
