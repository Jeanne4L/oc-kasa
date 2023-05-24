import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './styles.module.css'

/**
 * @component
 * @param {*} props
 * @param {string} props.title - rental title
 * @param {string} [props.paragraphText] - collapse description
 * @param {Array<string>} [props.list] - rental available equipment
 * @returns {JSX.Element} - collapsible element
 */

function Collapse(props) {
    let url = useLocation()

    const [open, setOpen] = useState(false)
    const [btnUp, setBtnUp] = useState(false)

    function toggle() {
        setOpen(!open)
        setBtnUp(!btnUp)
    }

    return (
        <div
            className={`${styles.collapse} ${
                url.pathname === '/about'
                    ? styles.about_collapse
                    : styles.rental_collapse
            }`}
        >
            <div className={`${styles.collapse__title}`}>
                <p>{props.title}</p>
                <i
                    className={`fa-solid fa-chevron-down ${
                        styles.collapse_btn
                    } ${btnUp ? styles.btn_up : ''}`}
                    onClick={toggle}
                ></i>
            </div>

            <div
                className={`${styles.collapse__text} ${
                    open ? styles.down : ''
                }`}
            >
                <div className={styles.collapse__content}>
                    {/* This part can have a paragraph or a list */}
                    {props.paragraphText && <p>{props.paragraphText}</p>}
                    {props.list && (
                        <ul>
                            {props.list.map((listItem, index) => (
                                <li key={`${listItem}-${index}`}>{listItem}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Collapse
