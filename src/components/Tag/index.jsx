import styles from './styles.module.css'

function Tag(props) {
    return (
        <div className={styles.tags}>
            {props.tags.map((tag, index) => (
                <li key={`${tag}-${index}`} className={styles.tag}>
                    {tag}
                </li>
            ))}
        </div>
    )
}
export default Tag
