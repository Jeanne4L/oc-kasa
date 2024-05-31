import styles from './styles.module.scss'

/**
 * @component
 * @param {*} props
 * @param {number} props.tags - rental tags
 * @returns {JSX.Element} - rental tag
 */

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
