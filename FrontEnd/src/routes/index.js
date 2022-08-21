import Home from '../page/Home'
import Seat from '../page/Seat'
import Profile from '../page/Profile'
import Checkout from '../page/Checkout'

const publicRoutes = [
    { path: '/', component: Home},
    { path: '/seat', component: Seat, layout: null },
    { path: '/checkout', component: Checkout, layout: null },
]

const privateRoutes = [
    { path: '/profile', component: Profile }
]

export { publicRoutes, privateRoutes }