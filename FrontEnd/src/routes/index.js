import Home from '../page/Home'
import Seat from '../page/Seat'
import Profile from '../page/Profile'
import Checkout from '../page/Checkout'
import Dropdown from '../components/Dropdown/Dropdown'

const publicRoutes = [
    { path: '/', component: Home},
    { path: '/seat/:id', component: Seat, layout: null },
    { path: '/checkout', component: Checkout, layout: null },
    { path: '/dr', component: Dropdown, layout: null },
]

const privateRoutes = [
    { path: '/profile', component: Profile }
]

export { publicRoutes, privateRoutes }