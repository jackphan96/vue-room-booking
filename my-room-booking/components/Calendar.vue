<template>
  <div>
    <div id="calendar"></div>
  </div>
</template>

<script>
document.addEventListener("DOMContentLoaded", function() {
  // displays selected sections on timetable
  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: ["interaction", "dayGrid", "timeGrid"],
    defaultView: "timeGridWeek",
    defaultDate: "2019-09-09",
    minTime: "00:00:00",
    maxTime: "24:00:00",
    firstDay: 1,
    header: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay"
    },
    events: [
      {
        id: 999,
        title: "Repeating Event",
        start: "2019-09-09T16:00:00"
      }
    ]
  });
  calendar.render();
});

export default {
//   head: {
    
//   }
};
</script>

<style></style>
