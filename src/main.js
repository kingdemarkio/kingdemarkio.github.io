import { createApp } from 'vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';

import '@/style.css';
import App from '@/App.vue';
import router from '@/router';

const app = createApp(App);
app.use(router);
app.mount('#app');
