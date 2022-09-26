import { logo, streamLogo, videoPlayerIcon, searchIcon } from '../../../assets/image'
import { useState } from 'react'
import Login from '../../../components/Login/Login'
import Dropdown from '../../../components/Dropdown/Dropdown';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Button from '../../../components/FormField/Button/Button';
import LinkMenu from '../../../components/FormField/LinkMenu/LinkMenu';
import { searchInput, bar } from '../../../assets/icons';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss'

const cx = classNames.bind(styles)

function Navbar() {
    const [isLogin, setIsLogin] = useState(false);
    const [isMenu, setIsMenu] = useState(false);

    return ( 
        <div>
            <header className={cx('wrappder-header-max')}>
                { isMenu && <Dropdown setIsMenu={setIsMenu} />}
                { isLogin && <Login setIsLogin={setIsLogin} /> }
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
                                <Button
                                    className={cx('button-sign')}
                                    onClick={() => setIsLogin(true)}
                                >
                                    Sign in
                                </Button>
                            </div>
                            <div
                                className={cx('bar-icon')}
                                onClick={() => setIsMenu(true)}
                            >
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
            <header className={cx('wrapper-header-min')}>
                <div className={cx('container-header-min')}>
                    <div className={cx('flex-header-min')}>
                        <div className={cx('back-header-min')}>
                            <svg 
                                viewBox="0 0 10 18" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path 
                                    fill-rule="evenodd" 
                                    clip-rule="evenodd" 
                                    d="M9.53769 0.477136C9.82646 0.774095 9.81982 1.24892 9.52286 1.53769L1.84894 9L9.52286 16.4623C9.81982 16.7511 9.82646 17.2259 9.53769 17.5229C9.24892 17.8198 8.77409 17.8265 8.47713 17.5377L0.638259 9.91498C0.638212 9.91493 0.638165 9.91488 0.638117 9.91484C0.638029 9.91475 0.63794 9.91467 0.637851 9.91458C0.3921 9.67576 0.250001 9.3472 0.250001 9C0.250001 8.6528 0.3921 8.32424 0.637851 8.08542C0.637988 8.08529 0.638123 8.08516 0.63826 8.08502L8.47713 0.462309C8.77409 0.173538 9.24892 0.180177 9.53769 0.477136ZM1.68317 8.8388C1.68331 8.83893 1.68345 8.83906 1.68358 8.8392L1.68317 8.8388Z" 
                                    fill="#FFFFFF"
                                >
                                </path>
                            </svg>
                        </div>
                        <div className={cx('stream-header-min')}>
                            <div>
                                <img src={streamLogo} alt="stream" />
                            </div>
                        </div>
                        <div className={cx('tool-header-min')}>
                            <div className={cx('container-tool-header')}>
                                <div>
                                    <div>
                                        <img src={videoPlayerIcon} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('container-tool-header')}>
                                <div>
                                    <div>
                                        <img src={searchIcon} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Navbar;