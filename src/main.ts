import { createApp } from 'vue';
import App from './App.vue';
import './css/reset.css';
import router from './router';

createApp(App).use(router).mount('#app');
