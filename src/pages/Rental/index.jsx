import React from 'react'
import { useParams, Navigate } from 'react-router-dom'

import Rentals from '../../data/rentals.json'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import Dropdown from '../../components/Dropdown'
import styles from './rental.module.scss'
import Carousel from '../../components/Carousel'

/**
 *
 * @returns {JSX.Element} - rental page
 */

function Rental() {
  const { id } = useParams()
  const rental = Rentals.filter((rental) => rental.id === id)

  if (rental.length > 0) {
    return (
      <main>
        {rental.map((rental) => (
          <React.Fragment key={`rentalContainer-${rental.id}`}>
            <Carousel pictures={rental.pictures} />
            <div className={styles.presentation}>
              <div className={styles.presentation__titles}>
                <h1 key={`${rental.title}-${rental.id}`}>{rental.title}</h1>
                <h2
                  className={styles.location_title}
                  key={`${rental.location}-${rental.id}`}
                >
                  {rental.location}
                </h2>

                <div key={`tagsContainer-${rental.id}`}>
                  <Tag tags={rental.tags} />
                </div>
              </div>

              <div
                key={`rentalInfoContainer-${rental.id}`}
                className={styles.presentation__info}
              >
                <Rating rental={rental} />
                <div className={styles.presentation__info__host}>
                  <p className={styles.presentation__info__host__name}>
                    {rental.host.name}
                  </p>
                  <img src={rental.host.picture} alt={rental.host.name} />
                </div>
              </div>
            </div>

            <div className={styles.dropdown_container}>
              <Dropdown title={'Description'}>
                <p>
                  {rental.description}
                </p>
              </Dropdown>
              <Dropdown title={'Équipements'}>
                <ul>
                  {rental.equipments.map((equipment)=>(
                    <li key={`${equipment}-${rental.id}`}>{equipment}</li>
                  ))}
                </ul>
              </Dropdown>
            </div>
          </React.Fragment>
        ))}
      </main>
    )
  } else {
    // If the id in the url is wrong, this redirects to the 404 page
    return <Navigate to={'*'} />
  }
}

export default Rental