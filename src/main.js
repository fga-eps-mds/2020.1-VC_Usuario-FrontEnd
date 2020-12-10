import { createApp } from 'vue'
import App from './App.vue'
//import './registerServiceWorker' 
//#Service Worker of Vue cli is not used now
import store from "./store/index.js";
import router from './router'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')