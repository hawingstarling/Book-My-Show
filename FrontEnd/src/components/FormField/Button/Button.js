import classNames from 'classnames/bind';
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button(props) {
    const {
        children,
        className,
        onClick,
    } = props

    const classes = cx('button-style', {
        [className]: className
    })

    return ( 
        <button
            onClick={onClick}
            className={classes} 
        >
            {children}
        </button>
     );
}

export default Button;