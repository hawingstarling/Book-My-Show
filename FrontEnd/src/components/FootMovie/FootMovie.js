import classNames from 'classnames/bind';
import styles from './FootMovie.module.scss'

const cx = classNames.bind(styles)

function FootMovie() {
    return ( 
        <div className={cx('list-movie-foot')}>
            <div className={cx('container-movie')}>
                <div className={cx('item-movie-foot')}>
                    <div className={cx('content-title-movie')}>Top Movies To Watch Online</div>
                    <div className={cx('list-item-movie')}>
                        <a href="/movies/paw-patrol-the-movie/ET00311835" >Paw Patrol: The Movie</a>
                        <a href="/movies/batman-the-long-halloween-part-1/ET00312143" >Batman: The Long Halloween Part 1</a>
                        <a href="/movies/47-dhansukh-bhawan/ET00105080" >47 Dhansukh Bhawan</a>
                        <a href="/movies/a-mighty-heart/ET00000230" >A Mighty Heart</a>
                        <a href="/movies/ouija/ET00025035" >Ouija</a>
                        <a href="/movies/isnt-it-romantic/ET00070709" >Isn`t It Romantic</a>
                        <a href="/movies/the-boss-baby-family-business/ET00301313" >The Boss Baby: Family Business</a>
                        <a href="/movies/eyes-of-laura-mars/ET00309791" >Eyes Of Laura Mars</a>
                        <a href="/movies/the-great-indian-kitchen/ET00315106" >The Great Indian Kitchen</a>
                        <a href="/movies/a-few-good-men/ET00300243" >A Few Good Men</a>
                        <a href="/movies/street-fighter-assassins-fist/ET00303879" >Street Fighter: Assassin`s Fist</a>
                        <a href="/movies/enter-the-dragon/ET00064110" >Enter the Dragon</a>
                        <a href="/movies/deya-neya/ET00312117" >Deya Neya</a>
                        <a href="/movies/shrek-forever-after/ET00004735" >Shrek Forever After </a>
                        <a href="/movies/insidious-chapter-3/ET00025236" >Insidious: Chapter 3</a>
                        <a href="/movies/passengers/ET00040791" >Passengers</a>
                        <a href="/movies/hum-hai-rahi-pyar-ke/ET00303260" >Hum Hai Rahi Pyar Ke</a>
                        <a href="/movies/sesh-chithi/ET00075866" >Sesh Chithi</a>
                        <a href="/movies/naan-kadavul/ET00002583" >Naan Kadavul</a>
                        <a href="/movies/blind-date/ET00303678" >Blind Date</a>
                    </div>
                </div>

                <div className={cx('item-movie-foot')}>
                    <div className={cx('content-title-movie')}>Top Online Premiere Movies</div>
                    <div className={cx('list-item-movie')}>    
                        <a href="/movies/paw-patrol-the-movie/ET00311835">Paw Patrol: The Movie</a>
                        <a href="/movies/batman-the-long-halloween-part-1/ET00312143">Batman: The Long Halloween Part 1</a>
                        <a href="/movies/the-boss-baby-family-business/ET00301313">The Boss Baby: Family Business</a>
                        <a href="/movies/mothering-sunday/ET00332540">Mothering Sunday</a>
                        <a href="/movies/fear-of-rain/ET00301465">Fear Of Rain</a>
                        <a href="/movies/sing-2/ET00320491">Sing 2</a>
                        <a href="/movies/on-a-magical-night/ET00311345">On a Magical Night</a>
                        <a href="/movies/kursk/ET00087702">Kursk</a>
                        <a href="/movies/who-you-gonna-call/ET00329611">Who You Gonna Call?</a>
                        <a href="/movies/kuttram-kuttrame/ET00326882">Kuttram Kuttrame</a>
                        <a href="/movies/dangerous-2022/ET00319461">Dangerous (2022)</a>
                        <a href="/movies/studio-666/ET00327014">Studio 666</a>
                        <a href="/movies/the-outpost/ET00302299">The Outpost</a>
                        <a href="/movies/tailgate/ET00138770">Tailgate</a>
                        <a href="/movies/compartment-no-6/ET00329610">Compartment No. 6</a>
                        <a href="/movies/freaky/ET00301310">Freaky</a>
                        <a href="/movies/falling/ET00321598">Falling</a>
                        <a href="/movies/language-lessons/ET00323495">Language Lessons</a>
                        <a href="/movies/flight/ET00307035">Flight</a>
                        <a href="/movies/no-man-of-god/ET00322245">No Man of God</a>
                    </div>
                </div>
                <div className={cx('item-movie-foot')}>
                    <div className={cx('content-title-movie')}>Movies Releasing Soon On Stream</div>
                    <div className={cx('list-item-movie')}>
                        <a href="/movies/american-refugee/ET00327814">American Refugee</a>
                        <a href="/movies/the-duke/ET00332541">The Duke</a>
                        <a href="/movies/my-son/ET00332201">My Son</a>
                        <a href="/movies/the-good-neighbor/ET00333979">The Good Neighbor</a>
                    </div>
                </div>
                <div className={cx('item-movie-foot')}>
                    <div className={cx('content-title-movie')}>Top Online Exclusive Movies</div>
                    <div className={cx('list-item-movie')}>
                        <a href="/movies/fear-of-rain/ET00301465">Fear Of Rain</a>
                        <a href="/movies/hexing/ET00114107">Hexing</a>
                        <a href="/movies/the-tunnel/ET00303783">The Tunnel</a>
                        <a href="/movies/the-comeback-trail/ET00145943">The Comeback Trail</a>
                        <a href="/movies/hotel-coppelia/ET00300014">Hotel Coppelia</a>
                        <a href="/movies/32-malasana-street/ET00301462">32 Malasana Street</a>
                        <a href="/movies/dedh-gaanth/ET00310544">Dedh Gaanth</a>
                        <a href="/movies/trash/ET00306876">Trash</a>
                        <a href="/movies/scumbag/ET00138775">Scumbag</a>
                        <a href="/movies/to-the-stars/ET00304432">To The Stars</a>
                        <a href="/movies/daniel/ET00303782">Daniel</a>
                        <a href="/movies/gatecrash/ET00302706">Gatecrash</a>
                        <a href="/movies/the-spacewalker/ET00313350">The Spacewalker</a>
                        <a href="/movies/shorta/ET00300226">Shorta</a>
                        <a href="/movies/proximity/ET00302306">Proximity</a>
                        <a href="/movies/one-for-all/ET00146001">One For All</a>
                        <a href="/movies/night-drive/ET00314240">Night Drive</a>
                        <a href="/movies/the-people-upstairs/ET00301467">The People Upstairs</a>
                        <a href="/movies/dominika/ET00301485">Dominika</a>
                        <a href="/movies/in-reality/ET00304414">In Reality</a>
                    </div>
                </div>
                <div className={cx('item-movie-foot')}>
                    <div className={cx('content-title-movie')}>Online Bundles</div>
                    <div className={cx('list-item-movie')}>
                        <a href="/explore/stream-movies-online-streaming">Online Streaming Online Movies</a>
                        <a href="/explore/stream-movies-bms-past-premier">Recent Premieres Online Movies</a>
                        <a href="/explore/stream-movies-bms-premier">Premieres Online Movies</a>
                        <a href="/explore/stream-movies-rediscover-indian-cinema">Rediscover Indian Cinema Online Movies</a>
                        <a href="/explore/stream-movies-recommended">Recommended Online Movies</a>
                        <a href="/explore/stream-movies-archives">Archives Online Movies</a>
                        <a href="/explore/stream-movies-blockbusters">Blockbusters Online Movies</a>
                        <a href="/explore/stream-movies-flash-buy">Flash Buy Online Movies</a>
                        <a href="/explore/stream-movies-holiday-50">Holiday Season Offer - 50% Off Online Movies</a>
                        <a href="/explore/stream-movies-recently-added">Recently Added Online Movies</a>
                        <a href="/explore/stream-movies-bms-originals">60% off on selected titles Online Movies</a>
                        <a href="/explore/stream-movies-missed-in-theaters">Missed in Theatres Online Movies</a>
                        <a href="/explore/stream-movies-dubbed-language">Movies in Dubbed Language  Online Movies</a>
                        <a href="/explore/stream-movies-regional-cinema-offer">Regional Cinema @ 70% Discount Online Movies</a>
                        <a href="/explore/stream-movies-first-anniversary">Stream 1st Anniversary Online Movies</a>
                        <a href="/explore/stream-movies-diwali-delight">STREAM Diwali Delight Offer Online Movies</a>
                        <a href="/explore/stream-movies-oscars-collection">Oscars collection Online Movies</a>
                        <a href="/explore/stream-movies-award-winning-movies">Award Winning Movies Online Movies</a>
                        <a href="/explore/stream-movies-all-time-favorites">All Time Favourites Online Movies</a>
                        <a href="/explore/stream-movies-dubbed-movies-offer">Dubbed Movies @ 50% Discount Online Movies</a>
                        <a href="/explore/stream-movies-spotlight">Spotlight Online Movies</a>
                        <a href="/explore/stream-movies-family-films">Family films Online Movies</a>
                        <a href="/explore/stream-movies-get-spooked">Get Spooked  Online Movies</a>
                        <a href="/explore/stream-movies-on-discount">On Discount  Online Movies</a>
                        <a href="/explore/stream-movies-bms-exclusive">Exclusives Online Movies</a>
                        <a href="/explore/stream-movies-flashback-hollywood-80s-90s">Flashback - Hollywood 80s 90s Online Movies</a>
                        <a href="/explore/stream-movies-charlie-chaplin-keystone-collection">Charlie Chaplin Keystone Collection Online Movies</a>
                        <a href="/explore/stream-movies-around-the-world">Around the World Online Movies</a>
                        <a href="/explore/stream-movies-own-a-title-rs-89">Own a title @ Rs 89 Online Movies</a>
                        <a href="/explore/stream-movies-dc-collection">DC FanDome Online Movies</a>
                        <a href="/explore/stream-movies-world-cinema">World Cinema Online Movies</a>
                        <a href="/explore/stream-movies-flashback-80s-90s">Flashback - 80s 90s Online Movies</a>
                        <a href="/explore/stream-movies-evergreen-comedies">Evergreen Comedies Online Movies</a>
                        <a href="/explore/stream-movies-best-of-bengali-movies">Best of Bengali Movies Online Movies</a>
                        <a href="/explore/stream-movies-the-batman-chronicles">The Batman Chronicles Online Movies</a>
                        <a href="/explore/stream-movies-premium-movies-on-discount">Premium Movies on Discount Online Movies</a>
                        <a href="/explore/stream-movies-creature-films">Creature Films Online Movies</a>
                        <a href="/explore/stream-movies-animated">Animated Online Movies</a>
                        <a href="/explore/stream-movies-courtroom-dramas">Courtroom Dramas Online Movies</a>
                        <a href="/explore/stream-movies-oscar-collectibles">Oscar Collectibles Online Movies</a>
                        <a href="/explore/stream-movies-from-book-to-film">From Book To Film Online Movies</a>
                        <a href="/explore/stream-movies-serial-killer-films">Serial Killer Films Online Movies</a>
                        <a href="/explore/stream-movies-ladies-in-action">Ladies In Action Online Movies</a>
                        <a href="/explore/stream-movies-rom-com-movies">Rom-Com Movies  Online Movies</a>
                        <a href="/explore/stream-movies-maycation">Maycation Online Movies</a>
                        <a href="/explore/stream-movies-raining-blockbusters">Raining Blockbusters Online Movies</a>
                        <a href="/explore/stream-movies-best-of-regional-cinema">Best of Regional Cinema Online Movies</a>
                        <a href="/explore/stream-movies-wizarding-world">Celebrating Wizarding World Anniversary Online Movies</a>
                        <a href="/explore/stream-movies-valentines-day-special">Valentines day special Online Movies</a>
                        <a href="/explore/stream-movies-fun-galore">Fun Galore Online Movies</a>
                    </div>
                </div>
                <div className={cx('item-movie-foot')}>
                    <div className={cx('content-title-movie')}>Online Movies By Language</div>
                    <div className={cx('list-item-movie')}>
                        <a href="/explore/stream-movies-nepali">Online Movies in Nepali</a>
                        <a href="/explore/stream-movies-tulu">Online Movies in Tulu</a>
                        <a href="/explore/stream-movies-japanese">Online Movies in Japanese</a>
                        <a href="/explore/stream-movies-portuguese">Online Movies in Portuguese</a>
                        <a href="/explore/stream-movies-chattisgarhi">Online Movies in Chattisgarhi</a>
                        <a href="/explore/stream-movies-konkani">Online Movies in Konkani</a>
                        <a href="/explore/stream-movies-rajasthani">Online Movies in Rajasthani</a>
                        <a href="/explore/stream-movies-khasi">Online Movies in Khasi</a>
                        <a href="/explore/stream-movies-assamese">Online Movies in Assamese</a>
                        <a href="/explore/stream-movies-kannada">Online Movies in Kannada</a>
                        <a href="/explore/stream-movies-french">Online Movies in French</a>
                        <a href="/explore/stream-movies-tamil">Online Movies in Tamil</a>
                        <a href="/explore/stream-movies-bhojpuri">Online Movies in Bhojpuri</a>
                        <a href="/explore/stream-movies-telugu">Online Movies in Telugu</a>
                        <a href="/explore/stream-movies-malayalam">Online Movies in Malayalam</a>
                        <a href="/explore/stream-movies-haryanavi">Online Movies in Haryanavi</a>
                        <a href="/explore/stream-movies-sindhi">Online Movies in Sindhi</a>
                        <a href="/explore/stream-movies-bengali">Online Movies in Bengali</a>
                        <a href="/explore/stream-movies-english-7d">Online Movies in English 7D</a>
                        <a href="/explore/stream-movies-punjabi">Online Movies in Punjabi</a>
                        <a href="/explore/stream-movies-english">Online Movies in English</a>
                        <a href="/explore/stream-movies-oriya">Online Movies in Oriya</a>
                        <a href="/explore/stream-movies-spanish">Online Movies in Spanish</a>
                        <a href="/explore/stream-movies-hindi">Online Movies in Hindi</a>
                        <a href="/explore/stream-movies-gujrati">Online Movies in Gujarati</a>
                        <a href="/explore/stream-movies-urdu">Online Movies in Urdu</a>
                        <a href="/explore/stream-movies-marathi">Online Movies in Marathi</a>
                    </div>
                </div>
                <div className={cx('item-movie-foot')}>
                    <div className={cx('content-title-movie')}>Online Movies By Genre</div>
                    <div className={cx('list-item-movie')}>
                        <a href="/explore/stream-movies-drama">Drama Online Movies</a>
                        <a href="/explore/stream-movies-action">Action Online Movies</a>
                        <a href="/explore/stream-movies-comedy">Comedy Online Movies</a>
                        <a href="/explore/stream-movies-thriller">Thriller Online Movies</a>
                        <a href="/explore/stream-movies-adventure">Adventure Online Movies</a>
                        <a href="/explore/stream-movies-crime">Crime Online Movies</a>
                        <a href="/explore/stream-movies-romantic">Romantic Online Movies</a>
                        <a href="/explore/stream-movies-horror">Horror Online Movies</a>
                        <a href="/explore/stream-movies-sci-fi">Sci-Fi Online Movies</a>
                        <a href="/explore/stream-movies-mystery">Mystery Online Movies</a>
                        <a href="/explore/stream-movies-biography">Biography Online Movies</a>
                        <a href="/explore/stream-movies-animation">Animation Online Movies</a>
                        <a href="/explore/stream-movies-fantasy">Fantasy Online Movies</a>
                        <a href="/explore/stream-movies-musical">Musical Online Movies</a>
                        <a href="/explore/stream-movies-classic">Classic Online Movies</a>
                        <a href="/explore/stream-movies-historical">Historical Online Movies</a>
                        <a href="/explore/stream-movies-suspense">Suspense Online Movies</a>
                        <a href="/explore/stream-movies-sports">Sports Online Movies</a>
                        <a href="/explore/stream-movies-war">War Online Movies</a>
                        <a href="/explore/stream-movies-heist">Heist Online Movies</a>
                        <a href="/explore/stream-movies-political">Political Online Movies</a>
                        <a href="/explore/stream-movies-period">Period Online Movies</a>
                        <a href="/explore/stream-movies-psychological">Psychological Online Movies</a>
                        <a href="/explore/stream-movies-supernatural">Supernatural Online Movies</a>
                        <a href="/explore/stream-movies-devotional">Devotional Online Movies</a>
                        <a href="/explore/stream-movies-mythological">Mythological Online Movies</a>
                        <a href="/explore/stream-movies-bollywood">Bollywood Online Movies</a>
                        <a href="/explore/stream-movies-tragedy">Tragedy Online Movies</a>
                        <a href="/explore/stream-movies-adaptation">Adaptation Online Movies</a>
                        <a href="/explore/stream-movies-adult">Adult Online Movies</a>
                        <a href="/explore/stream-movies-noir">Noir Online Movies</a>
                        <a href="/explore/stream-movies-anime">Anime Online Movies</a>
                    </div>
                </div>
                <div className={cx('item-movie-foot')}>
                    <div className={cx('content-title-movie')}>COUNTRIES</div>
                    <div className={cx('list-item-movie')}>
                        <a href="https://id.bookmyshow.com/">Indonesia</a>
                        <a href="https://sg.bookmyshow.com/">Singapore</a>
                        <a href="https://ae.bookmyshow.com/">UAE</a>
                        <a href="https://lk.bookmyshow.com/">Sri Lanka</a>
                        <a href="https://wi.bookmyshow.com/">West Indies</a>
                </div>
                </div>
                <div className={cx('item-movie-foot')}>
                    <div className={cx('content-title-movie')}>HELP</div>
                    <div className={cx('list-item-movie')}>
                        <a href="/aboutus">About Us</a>
                        <a href="/contactus">Contact Us</a>
                        <a href="/careers/">Current Opening</a>
                        <a href="/press-release">Press Release</a>
                        <a href="/press-coverage">Press Coverage</a>
                        <a href="/static/sitemap">Sitemap</a>
                        <a href="/faq">FAQs</a>
                        <a href="/terms-and-conditions">Terms and Conditions</a>
                        <a href="/privacy">Privacy Policy</a>
                </div>
                </div>
                <div className={cx('item-movie-foot')}>
                    <div className={cx('content-title-movie')}>BOOKMYSHOW EXCLUSIVES</div>
                    <div className={cx('list-item-movie')}>
                        <a href="/superstar">Superstar</a>
                        <a href="/donation">BookASmile</a>
                        <a href="/voucher">Corporate Vouchers</a>
                        <a href="/giftcards">Gift Cards</a>
                        <a href="/s/list-your-show/">List My Show</a>
                        <a href="/offers">Offers</a>
                        <a href="/explore/c/stream">Stream</a>
                        <a href="/buzz">Buzz</a>
                        <a href="/trailers">Trailers</a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default FootMovie;