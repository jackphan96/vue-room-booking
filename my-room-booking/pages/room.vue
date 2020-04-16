<template>
  <div>
    <Navbar />

    <!-- Header text -->
    <section class="accomodation_area" style="padding-top: 45px;">
      <div class="container">
        <div class="section_title text-center">
          <!-- <h2 class="title_color">Room Booking</h2>
          <p>
            We all live in an age that belongs to the young at heart. Life that
            is becoming extremely fast,
          </p> -->
          <b-card
            overlay
            img-src="https://picsum.photos/900/250/?image=3"
            img-alt="Card Image"
            text-variant="white"
            title=""
            align="center"
          >
            <b-card-text >
              <h1>Room Booking</h1>
              Some quick example text to build on the card and make up the bulk
              of the card's content.
            </b-card-text>
          </b-card>
        </div>
      </div>
    </section>

    <!-- Room info -->
    <section class="section-gap">
      <div class="container">
        <b-card no-body class="overflow-hidden" style>
          <b-row no-gutters>
            <b-col md="5">
              <b-card-img
                src="~/assets/image/meeting-medium.jpg"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="7">
              <b-card-body title="Horizontal Card">
                <b-card-text>
                  This is a wider card with supporting text as a natural lead-in
                  to additional content. This content is a little bit longer.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </section>

    <!-- Calendar -->
    <b-container class="section-gap">
      <Calendar />
      <h1>Calendar</h1>
    </b-container>
    <!-- Calendar -->

    <!-- Fields -->
    <b-container class="section-gap">
      <h2>Enter your details</h2>
      <div role="group">
        <div>
          <label for="input-live">Name:</label>
          <b-form-input
            id="input-live"
            v-model="name"
            :state="nameState"
            aria-describedby="input-live-help input-live-feedback"
            placeholder="Enter your name"
            trim
          ></b-form-input>

          <!-- This will only be shown if the preceding input has an invalid state -->
          <b-form-invalid-feedback id="input-live-feedback"
            >Enter at least 3 letters</b-form-invalid-feedback
          >
        </div>

        <br />

        <div>
          <label for="input-live">Email:</label>
          <b-form-input
            id="input-live"
            v-model="email"
            :state="emailState"
            aria-describedby="input-live-help input-live-feedback"
            placeholder="zxc@hotmail.com"
            trim
          ></b-form-input>

          <!-- This will only be shown if the preceding input has an invalid state -->
          <b-form-invalid-feedback id="input-live-feedback"
            >Enter at least 3 letters</b-form-invalid-feedback
          >
        </div>
        <br />
        <div>
          <label for="timepicker-invalid">Choose a start time</label>
          <b-form-timepicker
            v-bind="startTime"
            aria-required="true"
            id="datepicker-invalid"
            :state="startTimeState"
            class="mb-2"
          ></b-form-timepicker>

          <label for="timepicker-valid">Choose a end time </label>
          <b-form-timepicker
            v-bind="endTime"
            aria-required="true"
            id="datepicker-valid"
            :state="endTimeState"
          ></b-form-timepicker>
        </div>

        <br />
        <b-button block size="lg" variant="warning" id="search-btn"
          >Book</b-button
        >
      </div>
    </b-container>
    <!-- Fields -->

    <!-- Map -->
    <b-container>
      <Map />
    </b-container>
    <!-- Map -->
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Map from "../components/Map.vue";
import Calendar from "../components/Calendar.vue";

// displays selected sections on timetable
// var calendarEl = document.getElementById("calendar");

// var calendar = new FullCalendar.Calendar(calendarEl, {
//   plugins: ["interaction", "dayGrid", "timeGrid"],
//   defaultView: "timeGridWeek",
//   defaultDate: "2019-09-09",
//   minTime: "00:00:00",
//   maxTime: "24:00:00",
//   firstDay: 1,
//   header: {
//     left: "prev,next today",
//     center: "title",
//     right: "dayGridMonth,timeGridWeek,timeGridDay"
//   },
//   events: [
//     {
//       id: 999,
//       title: "Repeating Event",
//       start: "2019-09-09T16:00:00"
//     }
//   ]
// });
// calendar.render();

export default {
  components: {
    Navbar,
    Map,
    Calendar
  },

  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/@fullcalendar/core@4.3.1/main.min.css"
        },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/@fullcalendar/daygrid@4.3.0/main.min.css"
        },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/@fullcalendar/timegrid@4.3.0/main.min.css"
        }
      ],
      script: [
        {
          src: "https://unpkg.com/@fullcalendar/core@4.3.1/main.min.js"
        },
        {
          src: "https://unpkg.com/@fullcalendar/interaction@4.3.0/main.min.js"
        },
        {
          src: "https://unpkg.com/@fullcalendar/daygrid@4.3.0/main.min.js"
        },
        {
          src: "https://unpkg.com/@fullcalendar/timegrid@4.3.0/main.min.js"
        }
      ]
    };
  },

  head: {
    title: "Booking Page",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
  },

  computed: {
    nameState() {
      return this.name.length > 2 ? true : false;
    },
    emailState() {
      return this.email.length > 2 ? true : false;
    },
    startTimeState() {
      return this.startTime.length > 0 ? true : false;
    },
    endTimeState() {
      return this.endTime.length > 0 ? true : false;
    }
  },

  data() {
    return {
      name: "",
      email: "",
      startTime: "",
      endTime: ""
    };
  }
};
</script>

<style>
.section-gap {
  padding: 100px 0;
}
</style>
