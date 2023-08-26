import { createApp } from 'vue';
import App from './App.vue';
import './css/reset.css';
import router from './router';

router.beforeEach((to, from, next) => {
    // Update the page title based on the route's meta field
    document.title = to.meta.title || 'Default Title';
    next();
});
createApp(App).use(router).mount('#app');
