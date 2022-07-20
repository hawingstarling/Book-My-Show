import { hut } from '../../assets/icons'
import Button from '../FormField/Button/Button'
import classNames from 'classnames/bind';
import styles from './Contact.module.scss'

const cx = classNames.bind(styles)

function Contact() {
    return ( 
        <div className={cx('wrapper-contact')} >
            <div className={cx('container-contact')} >  
                <img src={hut} alt="hutIcon" className={cx('icon-hut-contact')} />
                <div className={cx('list-contact')}>List your Show</div>
                <div className={cx('des-contact')}>Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow</div>
                <Button className={cx('button-contact')} >Contact today!</Button>            
            </div>
        </div>
     );
}

export default Contact;