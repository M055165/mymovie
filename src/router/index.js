import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/Home.vue'
import Detail from '../views/MoveieInfo.vue'
import Top100 from '../views/Top100.vue'
import Moviepage from '../views/MoviePage.vue'
import Bookinglist from '../views/Bookinglist.vue'
import Ticket from '../views/Ticketpage.vue'
import Login from '../views/LoginPage.vue'
import register from '../views/RegisterPage.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/running/:movieId',
    name: 'running',
    component: Detail
  },
  {
    path: '/comming/:movieId',
    name: 'comming',
    component: Detail
  },
  {
    path: '/top100',
    name: 'top100',
    component: Top100
  },
  {
    path: '/detail/:movieId',
    name: 'detail',
    component: Moviepage
  },
  {
    path: '/bookinglist',
    name: 'bookinglist',
    component: Bookinglist
  },
  {
    path: '/booking/:movieId',
    name: 'booking',
    component: Ticket
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
