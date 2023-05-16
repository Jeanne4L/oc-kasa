import styles from '../../styles/collapse.module.css'
import aboutStyles from '../../styles/about.module.css'

function Collapse({ title, paragraphText, list }) {
    return (
        <div className={`${styles.collapse} ${aboutStyles.collapse}`}>
            <div
                className={`${styles.collapse__title} ${aboutStyles.collapse_title}`}
            >
                <p>{title}</p>
                <i className="fa-solid fa-chevron-up"></i>
                <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div
                className={`${styles.collapse__text} ${aboutStyles.collapse_text}`}
            >
                {paragraphText && <p>{paragraphText}</p>}
                {list && (
                    <ul>
                        {list.map((listItem, index) => (
                            <li key={`${listItem}-${index}`}>{listItem}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Collapse
