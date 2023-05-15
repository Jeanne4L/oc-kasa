import logo from '../../images/logo--white.png'

function Footer() {
    return (
        <footer>
            <div className="container">
                <img
                    src={logo}
                    alt="mot Kasa avec une maison à la place du a"
                />
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
