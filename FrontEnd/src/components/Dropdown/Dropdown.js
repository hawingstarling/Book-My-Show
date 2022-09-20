import Button from '../FormField/Button/Button';
import DdLabel from '../DdLabel/DdLabel';
import { 
    rewardsLogin, 
    helpAndSupport,
    accountAndSettings,
    bookASmile,
    purchaseHistory,
    rewards,
    streamLibrary
} from '../../assets/image';
import { notifications } from '../../assets/icons'
import classNames from 'classnames/bind';
import styles from './Dropdown.module.scss'

const cx = classNames.bind(styles)

function Dropdown({ setIsMenu }) {
    return ( 
        <div className={cx('wrapper-dropdown')}>
            <div className={cx('bg-menu')}
                onClick={() => setIsMenu(false)}
            >
            </div>
            <div className={cx('container-dropdown')}>   
                <div className={cx('dropdown-title')}>
                    <div>Hey!</div>
                </div>
                <div className={cx('rewards-login')}>
                    <div className={cx('rewards')}>
                        <div>
                            <img src={rewardsLogin} alt="rewards login" />
                        </div>
                        <div className={cx('unlock')}>Unlock special offers & great benefits</div>
                    </div>
                    <Button
                        className={cx('button-rewards')}
                    >
                        Login / Register
                    </Button>
                </div>
                <div className={cx('dd-menu')}>
                    <DdLabel
                        iconMain={notifications}
                        title="Notifications"
                    >
                    </DdLabel>
                    <DdLabel
                        iconMain={purchaseHistory}
                        title="Purchase History"
                        subTitle="View all your bookings & purchases"
                        disable
                    >
                    </DdLabel>
                    <DdLabel
                        iconMain={streamLibrary}
                        title="Stream Library"
                        subTitle="Rented & Purchased Movies"
                        disable
                    >
                    </DdLabel>
                    <DdLabel
                        iconMain={helpAndSupport}
                        title="Help & Support"
                        subTitle="View commomly asked queries and Chat"
                    >
                    </DdLabel>
                    <DdLabel
                        iconMain={accountAndSettings}
                        title="Accounts & Settings"
                        subTitle="Location, Payments, Addresses & More"
                        disable
                    >
                    </DdLabel>
                    <DdLabel
                        iconMain={rewards}
                        title="Rewards"
                        subTitle="View your rewards & unlock new ones"
                    >
                    </DdLabel>
                    <DdLabel
                        iconMain={bookASmile}
                        title="BookASmile"
                    >
                    </DdLabel>
                </div>
            </div>
        </div>
     );
}

export default Dropdown;