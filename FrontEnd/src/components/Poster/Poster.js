import Card from './../FormField/Card/Card'
import axios from 'axios'
import { baseUpcomming, baseNowplaying } from '../../api/config'
import { useEffect, useState } from 'react';
import Banner from '../Banner/Banner'
import classNames from 'classnames/bind';
import styles from './Poster.module.scss'

const cx = classNames.bind(styles)

function Poster() {
    const [loading, setLoading] = useState(false);
    const [moviesUpcomming, setMoviesUpcomming] = useState([]);
    const [moviesNowplaying, setMoviesNowplaying] = useState([]);
    
    useEffect(() => {
        const handleFetch = async () => {
            await axios
                .all([axios.get(baseUpcomming), axios.get(baseNowplaying)])
                .then(
                    axios.spread((...res) => {
                        setMoviesUpcomming(res[0].data.data)
                        setMoviesNowplaying(res[1].data.data)
                    })
                )
                .catch((error) => console.error(error))
            setLoading(true)
        }

        handleFetch()
    }, []);

    return ( 
        loading && (
            <section className={cx('wrapper-poster')}>
                <div>
                    <div className={cx('container-poster')}>
                        <Card see title="Super Saver Packs" movies={moviesUpcomming}/>
                    </div>

                    <div className={cx('container-poster')}>
                        <Card title="Premiere of the week" movies={moviesNowplaying} />
                    </div>
                    <Banner title="Browse by price range" movies={moviesUpcomming} />
                    <div className={cx('container-poster')}>
                        <Card title="Premiere of the week" movies={moviesUpcomming} />
                    </div>
                    <div className={cx('container-poster')}>
                        <Card title="Premiere of the week" movies={moviesNowplaying} />
                    </div>
                </div>
            </section>
        )
    );
}

export default Poster;