import styles from './styles.module.css'

function Rating({ renting }) {
    // Scoring arrays
    const empty = Array(5).fill(<i className="ri-star-fill"></i>)
    const full = Array(5).fill(<i className="ri-star-fill"></i>)

    return (
        <div>
            {/* This displays the full stars corresponding to the score of the rental */}
            {full.slice(5 - renting.rating).map((fullStar, index) => (
                <span
                    key={index}
                    className={`${styles.star} ${styles.full_star}`}
                >
                    {fullStar}
                </span>
            ))}
            {/* This completes the score up to 5 with empty stars */}
            {empty.slice(renting.rating).map((emptyStar, index) => (
                <span
                    key={index}
                    className={`${styles.star} ${styles.empty_star}`}
                >
                    {emptyStar}
                </span>
            ))}
        </div>
    )
}
export default Rating
