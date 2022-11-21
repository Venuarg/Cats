import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";


axios.defaults.headers.common['x-api-key'] = 'live_NqXLa3Hw2OeZL3sTt2pbj3gIhsxzTrZ6DJGHQfskfjVWDWGOINTVSXQBRmcgWu2H'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
