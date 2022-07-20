import { callCenter, newsLetter, reSend } from '../../assets/icons'
import classNames from 'classnames/bind';
import styles from './Info.module.scss'

const cx = classNames.bind(styles)

function Info() {
    return ( 
        <div className={cx('wrapper-info')}>
            <div className={cx('container-info')}>
                <a href="#">
                    <img src={callCenter} alt="callCenter" />
                    <div>24/7 CUSTOMER CARE</div>
                </a>

                <a href="#">
                    <img src={reSend} alt="reSend" />
                    <div>RESEND BOOKING CONFIRMATION</div>
                </a>

                <a href="#">
                    <img src={newsLetter} alt="newsLetter" />
                    <div>SUBSCRIBE TO THE NEWSLETTER</div>
                </a>
            </div>
        </div>
     );
}

export default Info;
