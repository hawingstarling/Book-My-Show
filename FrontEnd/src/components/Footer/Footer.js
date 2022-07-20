import Contact from '../Contact/Contact'
import Info from '../Info/Info'
import FootMain from '../FootMain/FootMain'
import classNames from 'classnames/bind';
import styles from './Footer.module.scss'
import FootMovie from '../FootMovie/FootMovie';

const cx = classNames.bind(styles)

function Footer() {
    return ( 
        <div className={cx('wrapper-footer')}>
            <Contact />
            <Info />
            <FootMovie />
            <FootMain />
        </div>
     );
}

export default Footer;