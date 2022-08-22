import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';
import PrimeVue from 'primevue/config';

const mount = (el: Element) => {
    const app = createApp(Dashboard);
    app.use(PrimeVue)
    app.mount(el);
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_dashboard-dev-root');
    if (devRoot) {
        mount(devRoot);
    }
}

export { mount };
