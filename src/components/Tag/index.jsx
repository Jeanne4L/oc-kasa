import styles from '../../styles/tag.module.css'

function Tag({ tags }) {
    return (
        <div className={styles.tags}>
            {tags.map((tag, index) => (
                <li key={`${tag}-${index}`} className={styles.tag}>
                    {tag}
                </li>
            ))}
        </div>
    )
}
export default Tag
