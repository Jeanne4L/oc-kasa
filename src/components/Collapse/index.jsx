import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './styles.module.css'

function Collapse({ title, paragraphText, list }) {
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
                    : styles.renting_collapse
            }`}
        >
            <div className={`${styles.collapse__title}`}>
                <p>{title}</p>
                <i
                    className={`fa-solid fa-chevron-down ${
                        styles.collapse_btn
                    } ${btnUp ? styles.btn_up : ''}`}
                    onClick={toggle}
                ></i>
            </div>

            {open && (
                <div className={styles.collapse__text}>
                    {/* This part can have a paragraph or a list */}
                    {paragraphText && <p>{paragraphText}</p>}
                    {list && (
                        <ul>
                            {list.map((listItem, index) => (
                                <li key={`${listItem}-${index}`}>{listItem}</li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    )
}

export default Collapse
