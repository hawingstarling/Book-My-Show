import Home from '../page/Home'
import Seat from '../page/Seat'

const publicRoutes = [
    { path: '/', component: Home},
    { path: '/seat', component: Seat, layout: null }
]

const privateRoutes = [
    { path: '/seat', component: Seat }
]

export { publicRoutes, privateRoutes }