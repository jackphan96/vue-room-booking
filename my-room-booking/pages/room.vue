<template>
  <div>
    <Navbar />

    <!-- Header text -->
    <section class="accomodation_area section_gap">
      <div class="container">
        <div class="section_title text-center">
          <h2 class="title_color">Room Booking</h2>
          <p>
            We all live in an age that belongs to the young at heart. Life that
            is becoming extremely fast,
          </p>
        </div>
      </div>
    </section>

    <!-- Room info -->
    <div class="container">
      <b-card no-body class="overflow-hidden" style>
        <b-row no-gutters>
          <b-col md="5">
            <b-card-img src="~/assets/image/meeting-medium.jpg" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="7">
            <b-card-body title="Horizontal Card">
              <b-card-text>
                This is a wider card with supporting text as a natural lead-in to additional content.
                This content is a little bit longer.
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>

    <!-- Calendar -->
    <b-container class="section_gap">
      <Calendar />
    </b-container>
    <!-- Calendar -->

    <!-- Fields -->
    <b-container class="section_gap">
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
          <b-form-invalid-feedback id="input-live-feedback">Enter at least 3 letters</b-form-invalid-feedback>
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
          <b-form-invalid-feedback id="input-live-feedback">Enter at least 3 letters</b-form-invalid-feedback>
        </div>

        <b-button size="lg" variant="warning" id="search-btn">Search</b-button>

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

export default {
  components: {
    Navbar,
    Map,
    Calendar
  },

  head: {
    title: "Booking Page",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    // link: [
    //   {
    //     rel: "stylesheet",
    //     href: "https://unpkg.com/@fullcalendar/core@4.3.1/main.min.css"
    //   },
    //   {
    //     rel: "stylesheet",
    //     href: "https://unpkg.com/@fullcalendar/daygrid@4.3.0/main.min.css"
    //   },
    //   {
    //     rel: "stylesheet",
    //     href: "https://unpkg.com/@fullcalendar/timegrid@4.3.0/main.min.css"
    //   }
    // ],
    // script: [
    //   {
    //     src: "https://unpkg.com/@fullcalendar/core@4.3.1/main.min.js"
    //   },
    //   {
    //     src: "https://unpkg.com/@fullcalendar/interaction@4.3.0/main.min.js"
    //   },
    //   {
    //     src: "https://unpkg.com/@fullcalendar/daygrid@4.3.0/main.min.js"
    //   },
    //   {
    //     src: "https://unpkg.com/@fullcalendar/timegrid@4.3.0/main.min.js"
    //   }
    // ]
  },

  computed: {
    nameState() {
      return this.name.length > 2 ? true : false;
    },
    emailState() {
      return this.email.length > 2 ? true : false;
    }
  },
  data() {
    return {
      name: "",
      email: ""
    };
  }
};
</script>

<style>
.section_gap {
  padding: 100px 0;
}
</style>
