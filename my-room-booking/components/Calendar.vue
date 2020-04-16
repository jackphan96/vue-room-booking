<template>
  <FullCalendar
    defaultView="timeGridWeek"
    :plugins="calendarPlugins"
    :weekends="false"
    :events="eventsData"
    :header="header"
    :height="670"
    minTime = "08:00:00"
    maxTime= "22:00:00"
  />
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarPlugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      header: {
        left: "prev,next today",
        center: "title",
        right: "timeGridWeek,timeGridDay"
      },
      eventsData: [
        { title: 'event 1', start: '2020-04-15T10:30:00', end: '2020-04-15T13:30:00' },
        { title: 'event 2', start: '2020-04-16T08:30:00', end: '2020-04-16T10:00:00' },
        { title: 'event 3', start: '2020-04-16T14:00:00', end: '2020-04-16T17:00:00' },
        { title: 'event 4', start: '2020-04-17T08:30:00', end: '2020-04-17T10:00:00' }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "~/node_modules/@fullcalendar/core/main.css";
@import "~/node_modules/@fullcalendar/daygrid/main.css";
@import "~/node_modules/@fullcalendar/timegrid/main.css";

#calendar {
  max-width: 900px;
  margin: 40px auto;
}

.fc-event-container {
  font-size: 10vi;
  color: white;
}
</style>
