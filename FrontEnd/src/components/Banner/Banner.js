import Button from '../FormField/Button/Button'
import classNames from 'classnames/bind';
import styles from './Banner.module.scss'

const cx = classNames.bind(styles)

function Banner(props) {
    const { title, optionList} = props

    return ( 
        <div className={cx('wrapper-banner')}>
            <div className={cx('container-banner')}>
                <div className={cx('title-banner')}>{title}</div>
                <div className={cx('select-banner')}>
                    <div className={cx('option-banner')}>
                        <a href="#">
                            <Button className={cx('button-banner')}>₹0 - ₹50</Button>
                        </a>
                        <a href="#">
                            <Button className={cx('button-banner')}>₹51 - ₹100</Button>
                        </a>
                        <a href="#">
                            <Button className={cx('button-banner')}>₹101 - ₹200</Button>
                        </a>
                        <a href="#">
                            <Button className={cx('button-banner')}>₹201 - ₹350</Button>
                        </a>
                        <a href="#">
                            <Button className={cx('button-banner')}>₹351 - ₹550</Button>
                        </a>
                        <a href="#">
                            <Button className={cx('button-banner')}>₹550+</Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Banner;