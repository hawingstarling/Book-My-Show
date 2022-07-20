import Card from './../FormField/Card/Card'
import Banner from '../Banner/Banner'
import classNames from 'classnames/bind';
import styles from './Poster.module.scss'

const cx = classNames.bind(styles)

function Poster() {

    return ( 
        <section className={cx('wrapper-poster')}>
            <div>
                <div className={cx('container-poster')}>
                    <Card see title="Super Saver Packs"/>
                </div>

                <div className={cx('container-poster')}>
                    <Card title="Premiere of the week" />
                </div>
                <Banner title="Browse by price range" />
                <div className={cx('container-poster')}>
                    <Card title="Premiere of the week" />
                </div>
                <div className={cx('container-poster')}>
                    <Card title="Premiere of the week" />
                </div>
            </div>
        </section>
    );
}

export default Poster;