import { helpAndSupport } from '../../assets/image';
import { rightArrow, lock } from '../../assets/icons';
import classNames from 'classnames/bind';
import styles from './DdLabel.module.scss'

const cx = classNames.bind(styles)


function DdLabel(props) {
    const { 
        className, 
        onClick, 
        title, 
        subTitle, 
        iconMain,
        disable
    } = props

    
    const classes = cx('dd-style', disable ? 'disable' : '' , {
        [className]: className
    })

    return ( 
        <div className={classes}
        >
            <div className={cx('container-dd')}>
                <img src={iconMain} alt="i" />
                <div className={cx('dd-content')}>
                    <div className={cx('dd-title')}>{title}</div>
                    <div className={cx('dd-subtitle')}>{subTitle}</div>
                </div>
                <span>
                    <img src={disable ? lock : rightArrow} alt="icon" />
                </span>
            </div>
        </div>
     );
}

export default DdLabel;