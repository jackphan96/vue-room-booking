// import Vue from 'vue';
// import FullCalendar from '@fullcalendar/vue'
// import dayGridPlugin from '@fullcalendar/daygrid'

// // Vue.use(FullCalendar);
// Vue.component('FullCalendar', FullCalendar);
// // Vue.component('dayGridPlugin', dayGridPlugin);
// Vue.use(dayGridPlugin);

import Vue from 'vue';
import Calendar from '~/components/Calendar'

Vue.component('full-calendar', Calendar);