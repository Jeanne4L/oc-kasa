import logo from '../../images/logo--white.png'
import styles from './styles.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <img src={logo} alt="mot Kasa avec une maison à la place du a" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
