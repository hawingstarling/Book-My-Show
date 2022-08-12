import classNames from 'classnames/bind';
import styles from './ShowCounter.module.scss'

const cx = classNames.bind(styles)

function ShowCounter(timer) {
    const { minutes, seconds } = timer 

    return ( 
        <div className={cx((minutes === 0 && seconds <= 59) ? 'is-danger' : 'show-counter' )}>
            <div className={cx('timer')}>
                <div>{ minutes }</div>
            </div>
                <span>:</span>
            <div className={cx('timer')}>
                <div>{ seconds }</div>
            </div>
        </div>
     );
}

export default ShowCounter;