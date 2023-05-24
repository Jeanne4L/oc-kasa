import { useState, React } from 'react'
import styles from './styles.module.css'

/**
 * @component
 * @param {*} props
 * @param {Array<string>} props.pictures - rental images sources
 * @returns {JSX.Element} - image carousel
 */

function Carousel(props) {
    const [count, setCount] = useState(1)

    function limitCount() {
        if (count > props.pictures.length) {
            setCount(1)
        } else if (count < 1) {
            setCount(props.pictures.length)
        }
    }
    limitCount()

    for (let i = 0; i < props.pictures.length; i++) {
        return (
            <div className={styles.carousel}>
                <img src={props.pictures[count - 1]} alt="logement" />

                {/* Buttons and numbering are displayed if carousel have more than one picture */}
                {props.pictures.length > 1 && (
                    <div>
                        <i
                            className={`ri-arrow-left-s-line ${styles.back} ${styles.nav_btn}`}
                            onClick={() => setCount(count - 1)}
                        ></i>
                        <i
                            className={`ri-arrow-right-s-line ${styles.next} ${styles.nav_btn}`}
                            onClick={() => setCount(count + 1)}
                        ></i>
                        <span className={styles.numbering}>
                            {count}/{props.pictures.length}
                        </span>
                    </div>
                )}
            </div>
        )
    }
}

export default Carousel
