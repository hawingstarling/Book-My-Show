import { screen, play, bar } from '../../assets/icons'
import { logo } from '../../assets/image'
import { spider } from '../../assets/image'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import CountdownTimer from '../../utils/CountdownTimer'
import classNames from 'classnames/bind';
import styles from './Seating.module.scss'
import axios from 'axios'
import { baseUrl } from '../../api/config'

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
        },
        "F": {
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
        "G": {
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
        
    }
}

const TIME_BOOKING = ['10:00', '12:30', '15:00', '17:00']

var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
var days = ['SUN', 'MON', 'TUE', 'WEB', 'THU', 'FRI', 'SAT'];
const monthNames = ["Ja", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
const DATE = [
    { date: currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 0) },
    { date: currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 1) },
    { date: currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 2) },
    { date: currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 3) },
    { date: currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 4) },
    { date: currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 5) },
    { date: currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 6) },
]

const data = SEAT.seatInfo

function Seating() {
    const [date, setDate] = useState({});
    const [isMenu, setIsMenu] = useState(false);
    const [ticket, setTicket] = useState({});
    const [seatSelected, setSeatSelected] = useState([]);
    const [isThumbnail, setIsThumbnail] = useState(false);

    const location = useLocation()
    const movieInfo = location.state
    console.log('API Data movies stream: ', movieInfo);

    // NOTE: 3 minutes
    const THREE_MINUTES_IN_MS = 3 * 60 * 1000;  // 3 minutes
    const NOW_IN_MS = new Date().getTime(); // getTime from 1 January 1970 to now. 
    const dateTimeAfterThreeMinutes = NOW_IN_MS + THREE_MINUTES_IN_MS;

    // NOTE: Pick seat
    const handleSeatSelected = (e, seat) => {

        if (e.target.classList.contains(cx('seat')) && !e.target.classList.contains(cx('occupied'))) {
            e.target.classList.toggle(cx('selected'))
        }
        if (seatSelected.includes(seat))  {
            const index = seatSelected.indexOf(seat)
            seatSelected.splice(index, 1)
        } else {
            setSeatSelected(prev => {
                const newSeat = [...prev, seat]

                console.log('seat useState: ', newSeat);

                console.log('--------------------------------------------------------');
                console.log('|    You have chosen seat is', newSeat, 'to go the movies    |');
                console.log('--------------------------------------------------------');

                setTicket(prevTicket => {
                    const newTicket = {...prevTicket, seatSelected: newSeat}
                    return newTicket
                })

                return newSeat
            })
        }
    }

    // NOTE: Pick date
    const handlePickDate = (e, date) => {
        console.log('--------------------------------------------------------');
        console.log('|     You have chosen ', date, 'to go the movies     |');
        console.log('--------------------------------------------------------');

        const selectDate = document.getElementsByClassName(cx('selected-date'))[0]

        if (selectDate != undefined) selectDate.classList.remove(cx('selected-date'))

        e.currentTarget.classList.toggle(cx('selected-date'))
        setDate(prevDate => { 
            const newDate =  { 
                ...prevDate,
                date
            }
            setTicket(prevTicket => {
                const newTicket =  {
                    ...prevTicket,
                    time: newDate,
                    seatSelected
                }
                return newTicket
            })

            return newDate
        })

    }

    // NOTE: Pick time
    const handleTime = (e, time) => {
        const selectTimer = document.getElementsByClassName(cx('selected-time'))[0]

        console.log('--------------------------------------------------------');
        console.log('|        You have chosen ', time, 'to go the movies       |');
        console.log('--------------------------------------------------------');

        if (selectTimer != undefined) selectTimer.classList.remove(cx('selected-time'))

        e.target.classList.toggle(cx('selected-time'))
        setTicket(prevTicket => {
            const newTicket = {
                ...prevTicket,
                bookingTime: time
            }
            return newTicket
        })
    }

    // NOTE: Export checkout
    const handleCheckout = async () => {
        try {
            const resp = await axios({
                method: 'post',
                url: baseUrl + '/addseat/' + movieInfo.id,
                data: ticket
            })
            console.log(resp);
        } catch (e) {
            console.log(e);
            alert("Your seat Has been choose by other");
        }
    }

    useEffect(() => {
        console.log('Ticket checkout: ', ticket);
    })

    const handleThumbnail = (isThumbnail) => {
        const thumbNail = document.getElementsByClassName(cx('movie-seat'))[0];
        const mainSeat = document.getElementsByClassName(cx('main-seat'))[0];

        if (isThumbnail) {
            thumbNail.style.display = 'block'
            thumbNail.style.position = 'fixed'
        } else {
            thumbNail.style.display = 'none'
        }
        thumbNail.style.position = 'initial'
        setIsThumbnail(isThumbnail)
    }

    return (
        <>  
            <div style={{ height: '100vh' }}>
                <div className={cx('wrapper-header-one')}>
                    <nav className={cx('wrapper-navbar-top')}>
                        <div className={cx('navbar-top-left')}>
                            <a href="#" className={cx('link-bookmyshow')}>
                                <img src={logo} alt="Book My Show" />
                            </a>
                        </div>
                        <div className={cx('navbar-top-right')}>
                            <div
                                className={cx('bar-icon')}
                                onClick={() => handleThumbnail(!isThumbnail)}
                            >
                                <img src={bar} alt="bar-icon" />
                            </div>
                        </div>
                    </nav>
                </div>
                <div className={cx('wrapper-seat')}>
                    <div className={cx('movie-seat')}>
                        <div className={cx('card-seat')}>
                            <div className={cx('image-movie')}>
                                <img className={cx('card-movie')} src={movieInfo?.background.w500} alt="spider panel" />
                                <div className={cx('container-play')}>
                                    <img className={cx('play-movie')} src={play} alt="play" />
                                </div>
                            </div>
                            <div className={cx('content-movie-seat')}>
                                <h5>Movie</h5>
                                <p>{movieInfo.title}</p>
                                <h5>Direction</h5>
                                <p>Standard Lord</p>
                                <h5>Starring</h5>
                                <p>Tom Holland, Jacob Batalon, Marisa Tomei, Thomas Haden Church</p>
                                <h5>Genre</h5>
                                <p>Action, Adventure</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('main-seat')}>
                        <div className={cx('options-seat')}>
                            <div className={cx('date-seat')}>
                                {DATE.map((date, index) => (
                                    <div
                                        className={cx('each-seat')}
                                        key={index}
                                        onClick={(e) => handlePickDate(e, date.date.toLocaleString('en-US', {
                                                day: 'numeric',
                                                year: 'numeric',
                                                month: 'numeric',
                                            }))
                                        }
                                    >
                                        <div>{ days[date.date.getDay()] }</div>
                                        <div className={cx('date-numeric')}>{ date.date.getDate() }</div>
                                        <div>{ monthNames[date.date.getMonth()] }</div>
                                    </div>
                                ))}
                            </div>
                            <div className={cx('show-counter')}>
                                <CountdownTimer targetDate={dateTimeAfterThreeMinutes} />
                            </div>
                            <div className={cx('show-time')}>
                                {TIME_BOOKING.map((time, index) => (
                                    <div key={index} onClick={(e) => handleTime(e, time)}>
                                        <div className={cx('timer-seat')}>{time}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={cx('container-seat')}>
                            { Object.keys(data).map((key, index) => (
                                <div key={index} className={cx('row', `row-${key}`)}>
                                    <span className={cx('sign-seat')}>{key}</span>
                                    { [...Array(SEAT.rowSeats)].map((s, i) => (
                                        <div
                                            key={`seat-${key}-${i + 1}`}
                                            className={cx('seat',
                                                `seat-${key}-${i + 1}`, data[key].aisleSeats.map((aisle) => (
                                                    aisle === (i + 1) ? 'block' : '' ||
                                                    data[key].occupied.map((available) => (
                                                    available === (i + 1) ? 'occupied' : ''
                                                ))
                                            )))}
                                            onClick={(e) => handleSeatSelected(e, `${key}${i + 1}`)}
                                        >
                                            {i + 1}
                                        </div>
                                    )) }
                                </div>
                            )) }
                
                        </div>
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
                        <div className={cx('container-checkout')}>
                            {/* <ul className={cx('ul-left')}>
                                <li>
                                    <div>NAME</div>
                                    <div>hawkstar</div>
                                </li>
                                <li>
                                    <div>TICKETS</div>
                                    <div>3 tickets</div>
                                </li>
                            </ul> */}
                            <ul className={cx('ul-right')}>
                                <li>
                                    <div>PRICE</div>
                                    <div className={cx('total-seat')}>${seatSelected.length * 15},00</div>
                                </li>
                                <li className={cx('checkout')} onClick={() => handleCheckout()}>
                                    <div>CHECKOUT</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Seating;
