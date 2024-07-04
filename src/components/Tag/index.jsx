import styles from './styles.module.scss'

/**
 * @component
 * @param {*} props
 * @param {number} tags - rental tags
 * @returns {JSX.Element} - rental tag
 */

const Tag = ({tags}) => {
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
