import styles from '../../styles/collapse.module.css'

function Collapse({ title, paragraphText }) {
    return (
        <div className={styles.collapse}>
            <div className={styles.collapse__title}>
                <p>{title}</p>
                <i className="fa-solid fa-chevron-up"></i>
                <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className={styles.collapse__text}>
                <p>{paragraphText}</p>
            </div>
        </div>
    )
}

export default Collapse
