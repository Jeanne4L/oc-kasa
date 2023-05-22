import { useState, React } from 'react'
import styles from './styles.module.css'

function Carousel({ pictures }) {
    const [count, setCount] = useState(1)

    function limitCount() {
        if (count > pictures.length) {
            setCount(1)
        } else if (count < 1) {
            setCount(pictures.length)
        }
    }
    limitCount()

    for (let i = 0; i < pictures.length; i++) {
        return (
            <div className={styles.carousel}>
                <img src={pictures[count - 1]} alt="logement" />

                {/* Buttons and navigation are displayed if carousel have more than one picture */}
                {pictures.length > 1 && (
                    <div>
                        <i
                            className={`ri-arrow-left-s-line ${styles.back} ${styles.nav_btn}`}
                            onClick={() => setCount(count - 1)}
                        ></i>
                        <i
                            className={`ri-arrow-right-s-line ${styles.next} ${styles.nav_btn}`}
                            onClick={() => setCount(count + 1)}
                        ></i>
                        <span className={styles.picture_nb}>
                            {count}/{pictures.length}
                        </span>
                    </div>
                )}
            </div>
        )
    }
}

export default Carousel
