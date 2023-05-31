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
                        <span className={`material-symbols-outlined ${styles.back} ${styles.nav_btn}`}
                            onClick={() => setCount(count - 1)}>
                            arrow_back_ios_new
                        </span>

                        <span className={`material-symbols-outlined ${styles.next} ${styles.nav_btn}`}
                            onClick={() => setCount(count + 1)}
                        >
                            arrow_forward_ios
                        </span>
                        
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
