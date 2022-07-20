import { logo } from '../../assets/image'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Button from '../FormField/Button/Button';
import LinkMenu from '../FormField/LinkMenu/LinkMenu';
import { searchInput, bar } from '../../assets/icons';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss'

const cx = classNames.bind(styles)

function Navbar() {

    return ( 
        <header>
            <div className={cx('wrapper-header-one')}>
                <nav className={cx('wrapper-navbar-top')}>
                    <div className={cx('navbar-top-left')}>
                        <div className={cx('icon-bookmyshow')}>
                            <a href="#" className={cx('link-bookmyshow')}>
                                <img src={logo} alt="Book My Show" />
                            </a>
                        </div>
                        <div className={cx('input-search-container')}>
                            <div className={cx('input-search')}>
                                <span className={cx('search-icon')}><img src={searchInput} alt="searchInput" /></span>
                                <span className={cx('input-search-placeholder')}>Search for Movies, Events, Plays, Sports and Activities</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('navbar-top-right')}>
                        <div className={cx('wrapper-city-dropdown')}>
                            <span className={cx('city-dropdown')}>
                                Mumbai
                            </span>
                        </div>
                        <div>
                            <Button className={cx('button-sign')}>Sign in</Button>
                        </div>
                        <div className={cx('bar-icon')}>
                            <img src={bar} alt="bar-icon" />
                        </div>
                    </div>
                </nav>
            </div>

            <div className={cx('wrapper-header-two')}>
                <nav className={cx('wrapper-navbar-bottom')}>
                    <div className={cx('nav-bottom-first')}>
                        <div className={cx('nav-link-first')}>
                            <LinkMenu href="#">Movies</LinkMenu>
                            <LinkMenu href="#" news>Stream</LinkMenu>
                            <LinkMenu href="#" >Events</LinkMenu>
                            <LinkMenu href="#" >Plays</LinkMenu>
                            <LinkMenu href="#" >Sports</LinkMenu>
                            <LinkMenu href="#" >Activities</LinkMenu>
                            <LinkMenu href="#" >Buzz</LinkMenu>
                        </div>
                    </div>
                    <div className={cx('nav-bottom-second')}>
                        <div className={cx('nav-link-second')}>
                            <LinkMenu href="#" news>ListYourShow</LinkMenu>
                            <LinkMenu href="#" >Corporates</LinkMenu>
                            <LinkMenu href="#" >Offers</LinkMenu>
                            <LinkMenu href="#" >Gift Cards</LinkMenu>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;