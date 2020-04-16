<template>
  <div>
    <Navbar />

    <!-- Header text -->
    <section class="accomodation_area">
      <div class="">
        <div class="section_title text-center">
          <b-card
            overlay
            img-src="~assets/image/book-room.jpg"
            img-alt="Card Image"
            text-variant="white"
            title=""
            align="center"
            class="dark-overlay"
          >
            <b-card-text style="padding-top: 200px">
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
    <b-container>
      <h1>Calendar</h1>
      <Calendar />
    </b-container>
    <!-- Calendar -->

    <!-- Fields -->
    <b-container class="section-gap">
      <h2>Enter your details</h2>
      <div role="group">
        <div>
          <label for="input-live"><h5>Name:</h5></label>
          <b-form-input
            id="input-live"
            v-model="name"
            aria-describedby="input-live-help input-live-feedback"
            placeholder="Enter your name"
            trim
          ></b-form-input>
        </div>

        <br />

        <div>
          <label for="input-live"><h5>Email:</h5></label>
          <b-form-input
            id="input-live"
            v-model="email"
            aria-describedby="input-live-help input-live-feedback"
            placeholder="Enter your email address"
            trim
          ></b-form-input>
        </div>
        <br />
        <div>
          <div>
            <label for="timepicker-invalid"><h5>Choose a start time:</h5></label>
            <b-form-timepicker
              v-bind="startTime"
              aria-required="true"
              id="datepicker-start"
              class="mb-2"
            ></b-form-timepicker>
          </div>

          <br />

          <label for="timepicker-valid"><h5>Choose a end time:</h5> </label>
          <b-form-timepicker
            v-bind="endTime"
            aria-required="true"
            id="datepicker-end"
          ></b-form-timepicker>
        </div>

        <br />
        <b-button block size="lg" variant="warning" id="search-btn"
          >Book<b-icon icon="calendar"></b-icon
        ></b-button>
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
import Navbar from "~/components/Navbar.vue";
import Map from "~/components/Map.vue";
import Calendar from "~/components/Calendar.vue";

export default {
  components: {
    Navbar,
    Map,
    Calendar
  },

  head() {
    return {};
  },

  head: {
    title: "Booking Page",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto"
      }
    ]
  },

  computed: {
    currentpage() {
      return this.$route.path;
    }
  },

  data() {
    return {
      name: "",
      email: "",
      startTime: "",
      endTime: "",
      activeclass: 'active'
    };
  }
};
</script>

<style>
.section-gap {
  padding: 100px 0;
}

.dark-overlay::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(37, 37, 37, 0.6);
}

.section-center {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
