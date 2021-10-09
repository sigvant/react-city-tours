import React, {useState, useEffect} from 'react'
import Tour from '../Tour/Tour'
import './TourList.scss'
import {tourData} from './tourData'

function TourList() {
    const [tours, setTours] = useState([])

    useEffect(() => {
        setTours(tourData)
    }, [])    

    const removeTour = (id) => {
        const sortedTours = tours.filter(tour => tour.id !== id)
        setTours(sortedTours)
    }

    return (
        <section className='tourlist'>
            {
                tours.map((tour) => (
                    <Tour
                        id={tour.id}
                        key={tour.id}
                        city={tour.city}
                        img={tour.img}
                        name={tour.name}
                        info={tour.info}
                        removeTour={removeTour}
                    />
                ))
            }
        </section>
    )
}

export default TourList
