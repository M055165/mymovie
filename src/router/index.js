import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/Home.vue'
import Detail from '../views/MoveieInfo.vue'
import Top100 from '../views/Top100.vue'
import Moviepage from '../views/MoviePage.vue'
import Bookinglist from '../views/Bookinglist.vue'
import Ticket from '../views/Ticketpage.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/info',
    name: 'Info',
    component: Detail
  },
  {
    path: '/top100',
    name: 'top100',
    component: Top100
  },
  {
    path: '/detail',
    name: 'detail',
    component: Moviepage
  },
  {
    path: '/bookinglist',
    name: 'booking',
    component: Bookinglist
  },
  {
    path: '/ticket',
    name: 'ticket',
    component: Ticket
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
