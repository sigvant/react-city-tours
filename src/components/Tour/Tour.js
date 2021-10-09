import React, {useState} from 'react'
import './Tour.scss'

function Tour({id, city, img, name, info, removeTour}) {

    const [showInfo, setShowInfo] = useState(false);

    return (
        <article className='tour'>
            <div className="img-ctn">
                <img
                    src={img}
                    alt=""
                />
                <span className='close-btn' onClick={() => {removeTour(id)}}>
                    <i className="fas fa-window-close"></i>
                </span>
            </div>
            <div className="tour-info">
                <h3>{city}</h3>
                <h4>{name}</h4>
                <h5>
                    {' '}
                    <span>
                        <i onClick={() => setShowInfo(!showInfo)} className="fas fa-caret-square-down"></i>
                    </span>
                </h5>
                {/* setting up the info button */}
                {showInfo ? <p>{info}</p> : ''}
            </div>                        
        </article>
    )
}

export default Tour
