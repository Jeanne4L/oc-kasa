import styles from './styles.module.scss'

/**
 * @component
 * @param {*} props
 * @param {number} props.rental.rating - rental score
 * @returns {JSX.Element} - rental score out of 5 with stars
 */

function Rating(props) {
  // Scoring arrays
  const empty = Array(5).fill(<i className="fa-solid fa-star"></i>)
  const full = Array(5).fill(<i className="fa-solid fa-star"></i>)

  return (
    <div>
      {/* This displays the full stars corresponding to the score of the rental */}
      {full.slice(5 - props.rental.rating).map((fullStar, index) => (
        <span key={index} className={`${styles.star} ${styles.full_star}`}>
          {fullStar}
        </span>
      ))}
      {/* This completes the score up to 5 with empty stars */}
      {empty.slice(props.rental.rating).map((emptyStar, index) => (
        <span key={index} className={`${styles.star} ${styles.empty_star}`}>
          {emptyStar}
        </span>
      ))}
    </div>
  )
}
export default Rating
