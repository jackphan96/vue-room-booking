<template>
    <!-- :events="eventsData" -->

  <FullCalendar
    defaultView="timeGridWeek"
    :plugins="calendarPlugins"
    :weekends="false"
    :events="calendarData"
    :header="header"
    :height="670"
    minTime="08:00:00"
    maxTime="22:00:00"
  />
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import jsondata from "~/static/bookingdata.json";
import { mapState } from "vuex";

export default {
  props:['calendarData'],
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
      id: this.$route.params.id,
      data: jsondata,
    };
  },
  computed: {
    ...mapState(["data"]),
    product() {
      return this.data.find(el => el.id === this.id);
    }
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
