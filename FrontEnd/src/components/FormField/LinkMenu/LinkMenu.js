import classNames from 'classnames/bind';
import styles from './LinkMenu.module.scss'

const cx = classNames.bind(styles)

function LinkMenu(props) {
    const {
        href,
        className,
        children,
        news = false
    } = props

    const classes = cx('link-style', {
        [className]: className,
        news
    })

    return ( 
        <a 
            href={href}
            className={classes}
        >
            {children}
        </a>
     );
}

export default LinkMenu;