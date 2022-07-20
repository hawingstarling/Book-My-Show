import { facebook, twitter, instagram, youtube, pinterest, linkedIn } from '../../assets/icons'
import { logo } from '../../assets/image'
import classNames from 'classnames/bind';
import styles from './FootMain.module.scss'

const cx = classNames.bind(styles)

function FootMain() {
    return ( 
        <div className={cx('wrapper-foot')}>
            <div className={cx('container-foot')}>
                <div className={cx('logo-foot')}>
                    <a href="#">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div className={cx('social-foot')}>
                    <a href="#">
                        <img src={facebook} alt="" />
                    </a>
                    <a href="#">
                        <img src={twitter} alt="" />
                    </a>
                    <a href="#">
                        <img src={instagram} alt="" />
                    </a>
                    <a href="#">
                        <img src={youtube} alt="" />
                    </a>
                    <a href="#">
                        <img src={pinterest} alt="" />
                    </a>
                    <a href="#">
                        <img src={linkedIn} alt="" />
                    </a>
                </div>
                <div className={cx('title-foot')}>
                    Copyright 2022 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved. <br />
                    The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.
                </div>
            </div>
        </div>
     );
}

export default FootMain;