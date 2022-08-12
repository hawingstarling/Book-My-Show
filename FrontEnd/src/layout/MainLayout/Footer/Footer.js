import Contact from '../../../components/Contact/Contact'
import Info from '../../../components/Info/Info'
import FootMain from '../../../components/FootMain/FootMain'
import classNames from 'classnames/bind';
import styles from './Footer.module.scss'
import FootMovie from '../../../components/FootMovie/FootMovie';

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