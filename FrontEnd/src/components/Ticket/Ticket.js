import { qr } from '../../assets/image'
import classNames from 'classnames/bind';
import styles from './Ticket.module.scss'

const cx = classNames.bind(styles)

function Checkout() {
    return ( 
        <div className={cx('wrapper-ticket')}>
            <div className={cx('ticket')}>
                <div className={cx('ticket-left')}>
                    <div className={cx('image')}>
                        <p className={cx('admit-one')}>
                            <span>TICKET</span>
                            <span>TICKET</span>
                            <span>TICKET</span>
                        </p>
                        <div className={cx('ticket-number')}>
                            <p>#20030220</p>
                        </div>
                    </div>
                    <div className={cx('ticket-info')}>
                        <p className={cx('date')}>
                            <span>TUESDAY</span>
                            <span className={cx('date-month')}>JUNE 29TH</span>
                            <span>2022</span>
                        </p>
                        <div className={cx('show-name')}>
                            <h1>SPIDER-MAN</h1>
                            <h2>Standard Lord</h2>
                        </div>
                        <div className={cx('time')}>
                            <p>8:00 PM <span>TO</span>11:00 PM</p>
                            <p>DOORS <span>@</span>7:00 PM</p>
                        </div>
                        <p className={cx('location')}>
                            <span>East High school</span>
                            <span className={cx('separator')}>
                                <i className="far fa-smile"></i>
                            </span>
                            <span>East Lake City, Utah</span>
                        </p>
                    </div>
                </div>
                <div className={cx('ticket-right')}>
                    <p className={cx('admit-one')}>
                        <span>TICKET</span>
                        <span>TICKET</span>
                        <span>TICKET</span>
                    </p>
                    <div className={cx('right-info-container')}>
                        <div className={cx('show-name')}>
                            <h1>SOUR Prom</h1>
                        </div>
                        <div className={cx('time')}>
                            <p>8:00 PM <span>TO</span>11:00 PM</p>
                            <p>DOORS <span>@</span>7:00 PM</p>
                        </div>
                        <div className={cx('barcode')}>
                            <img src={qr} alt="qr" />
                        </div>
                        <p className={cx('ticket-number')}>
                            #20030220
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Checkout;