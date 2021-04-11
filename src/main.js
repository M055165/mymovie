import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <---

import 'bootstrap'; // Import js file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import css file
import "reset-css";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'




createApp(App).use(router).mount('#app')
