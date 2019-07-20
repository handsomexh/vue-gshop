import Home from '../pages/Home/Home'
import Discover from '../pages/Discover/Discover'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Login from '../pages/Login/Login'

export default [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/discover',
        component: Discover
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/order',
        component: Order
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/',
        redirect: '/home'
    }
]