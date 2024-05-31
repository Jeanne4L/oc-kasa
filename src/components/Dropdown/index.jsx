import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './styles.module.css'

/**
 * @component
 * @param {*} props
 * @param {string} props.title - rental title
 * @param {string} [props.paragraphText] - dropdown description
 * @param {Array<string>} [props.list] - rental available equipment
 * @returns {JSX.Element} - collapsible element
 */

function Dropdown(props) {
    let url = useLocation()

    const [open, setOpen] = useState(false)
    const [btnUp, setBtnUp] = useState(false)

    function toggle() {
        setOpen(!open)
        setBtnUp(!btnUp)
    }

    return (
        <div
            className={`${styles.dropdown} ${
                url.pathname === '/about'
                    ? styles.about_dropdown
                    : styles.rental_dropdown
            }`}
        >
            <div className={`${styles.dropdown__title}`}>
                <p>{props.title}</p>
                <i className={`fa-solid fa-chevron-up 
                    ${styles.dropdown_btn} ${btnUp ? styles.btn_up : ''}`} 
                    onClick={toggle}>
                </i>
                {/* <i
                    className={`fa-solid fa-chevron-down ${
                        styles.dropdown_btn
                    } ${btnUp ? styles.btn_up : ''}`}
                    onClick={toggle}
                ></i> */}
            </div>

            <div
                className={`${styles.dropdown__text} ${
                    open ? styles.down : ''
                }`}
            >
                <div className={styles.dropdown__content}>
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

export default Dropdown
