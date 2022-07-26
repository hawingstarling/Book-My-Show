import { screen, play } from '../../assets/icons'
import { spider } from '../../assets/image'
import { useEffect, useState } from 'react'
import classNames from 'classnames/bind';
import styles from './Seating.module.scss'

const cx = classNames.bind(styles)

const SEAT = {
    "cinema": "cgv",
    "rowSeats": 22,
    "typeSeats": "SILVER-Rs, 140.00",
    "seatInfo": {
        "A": {
            "numberOfSeats": 10,
            "aisleSeats": [
                11,
                12
            ],
            "occupied": [
                2,
                3
            ]
        },
        "B": {
            "numberOfSeats": 15,
            "aisleSeats": [
                11,
                12
            ],
            "occupied": [
                6,
                10,
                12
            ]
        },
        "C": {
            "numberOfSeats": 20,
            "aisleSeats": [
                11,
                12
            ],
            "occupied": [
                1,
                8
            ]
        },
        "D": {
            "numberOfSeats": 20,
            "aisleSeats": [
                9,
                10,
                11,
                12,
                13,
                14
            ],
            "occupied": [
                0,
                0
            ]
        },
        "E": {
            "numberOfSeats": 20,
            "aisleSeats": [
                9,
                10,
                11,
                12,
                13,
                14
            ],
            "occupied": [
                0,
                0
            ]
        }
    }
}

const data = SEAT.seatInfo

function Seating() {
    const [seatSelected, setSeatSelected] = useState([]);
    const [countDown, setCountDown] = useState(10);

    useEffect(() => {
        const timerId = setInterval(() => {
            setCountDown(prevState => prevState - 1)
        }, 1000)

        if (countDown === 0) {
            setSeatSelected([])
            setCountDown(10)    // để làm xuất hiện alert
        }

        return () => {
            clearInterval(timerId)
        }
    }, [countDown]);

    const handleSeatSelected = (seat) => {
        if (seatSelected.includes(seat))  {
            const index = seatSelected.indexOf(seat)
            seatSelected.splice(index, 1)
        } else {
            setSeatSelected(prev => {
                const newSeat = [...prev, seat]

                console.log('seat useState: ', newSeat);

                return newSeat
            })
        }
    }

    return (
        <>
            {/* De vay de test */}
            {countDown}
            
            <div className={cx('wrapper-seat')}>
                <div className={cx('movie-seat')}>
                    <div className={cx('card-seat')}>
                        <div className={cx('image-movie')}>
                            <img className={cx('card-movie')} src={spider} alt="spider panel" />
                            <div className={cx('container-play')}>
                                <img className={cx('play-movie')} src={play} alt="play" />
                            </div>
                        </div>
                        <div className={cx('content-movie-seat')}>
                            <h5>Movie</h5>
                            <p>SPIDER-MAN All Roads Lead To No Way Home</p>
                            <h5>Direction</h5>
                            <p>Standard Lord</p>
                            <h5>Starring</h5>
                            <p>Tom Holland, Jacob Batalon, Marisa Tomei, Thomas Haden Church</p>
                            <h5>Genre</h5>
                            <p>Action, Adventure</p>
                        </div>
                    </div>
                </div>
                
                <div className={cx('container-seat')}>
                    { Object.keys(data).map((key, index) => (
                        <div className={cx('row', `row-${key}`)}>
                            <span className={cx('sign-seat')}>{key}</span>
                            { [...Array(SEAT.rowSeats)].map((s, i) => (
                                <div
                                    key={`seat-${key}-${i + 1}`}
                                    className={cx('seat', 
                                        `seat-${key}-${i + 1}`, data[key].aisleSeats.map((aisle) => (
                                            aisle === (i + 1) ? 'seat-block' : '' ||
                                            data[key].occupied.map((available) => (
                                            available === (i + 1) ? 'seat-occupied' : ''
                                        ))
                                    )))}
                                    onClick={() => handleSeatSelected(`${key}-${i + 1}`)}
                                >
                                    {i + 1}
                                </div>
                            )) }
                        
                            {/* {console.log(data[key].aisleSeats)} */}
                        </div>
                    )) }
                    

                    <div className={cx('screen')}>
                        <span><img src={screen} alt="screen" /></span>
                        <span className={cx('text-screen')}>All eyes this way please!</span>
                    </div>

                    <div className={cx('select-seat')}>
                        <div className={cx('seat-sold-movie')}>
                            <div className={cx('seat', 'seat-sold')}></div>
                            <p>Sold</p>
                        </div>
                        <div className={cx('seat-avaiable-movie')}>
                            <div className={cx('seat', 'seat-avaiable')}></div>
                            <p>Avaiable</p>
                        </div>
                        <div className={cx('seat-selected-movie')}>
                            <div className={cx('seat', 'seat-selected')}></div>
                            <p>Selected</p>
                        </div>
                    </div>

                </div>

            </div>
            {/* <div className={cx('select-seat')}>
                <div className={cx('seat-sold-movie')}>
                    <div className={cx('seat', 'seat-sold')}></div>
                    <p>Sold</p>
                </div>
                <div className={cx('seat-avaiable-movie')}>
                    <div className={cx('seat', 'seat-avaiable')}></div>
                    <p>Avaiable</p>
                </div>
                <div className={cx('seat-selected-movie')}>
                    <div className={cx('seat', 'seat-selected')}></div>
                    <p>Selected</p>
                </div>
            </div> */}
        </>
    );
}

export default Seating;

// { Object.keys(data).map((key, index) => (
//     <div className={cx('row', `row-${data[key]}`)}>
//         { [...Array(data[key].numberOfSeats)].map((seat, index) => (
//             <div className={cx('seat', `seat-${index + 1}`)}></div>
//         ))

//         }
//     </div>
// ))}