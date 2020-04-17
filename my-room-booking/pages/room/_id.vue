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
            <b-card-text style="padding-top: 10%">
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
                :src="`/image/${product.img}`"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="7">
              <b-card-body>
                <b-card-text align="left">
                  <h3>{{ idDisplay }} meeting room</h3>
                  This is a wider card with supporting text as a natural lead-in
                  to additional content. This content is a little bit longer.
                  <br /><br />
                  <ul>
                    <li>{{ product.pax }} pax</li>
                    <li>Located at {{ product.location }}</li>
                  </ul>
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
      <Calendar :calendarData="bookingData" :instantiate="bookingsDataFunc" />
    </b-container>
    <!-- Calendar -->

    <!-- Fields -->
    <b-container class="section-gap">
      <h2>Enter your details</h2>
      <div role="group">
        <div>
          <label for="input-live"><h5>Name:</h5></label>
          <b-form-input
            id="input-name"
            value=""
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
            id="input-email"
            v-model="email"
            aria-describedby="input-live-help input-live-feedback"
            placeholder="Enter your email address"
            trim
          ></b-form-input>
        </div>
        <br />
        <div>
          <div>
            <label for="timepicker-invalid"
              ><h5>Choose a start time:</h5></label
            >
            <b-time v-model="value" locale="en" @context="onContext"></b-time>
          </div>

          <br />

          <label for="timepicker-valid"><h5>Choose a end time:</h5> </label>
          <b-time v-model="value2" locale="en" @context="onContext2"></b-time>
        </div>

        <br />
        <b-button
          block
          size="lg"
          variant="warning"
          id="search-btn"
          @click="
            myClickEvent();
            makeToast('success');
          "
          ref="myBtn"
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
import jsondata from "~/static/bookingdata.json";
import { mapState } from "vuex";

// $(window).load(function() {
//   bookingsDataFunc();
// });

export default {
  components: {
    Navbar,
    Map,
    Calendar
  },

  methods: {
    myClickEvent: function(e) {
      var newJSON = {
        title: this.name,
        start: this.startTime,
        end: this.endTime
      };
      this.bookingData.push(newJSON);
      console.log(this.bookingdata);
    },

    makeToast(variant = null) {
      this.$bvToast.toast("Room Booked!", {
        title: `Success Message`,
        variant: variant,
        solid: true
      });
    },

    onContext(ctx) {
      this.context = ctx;
      var hours = this.context.hours;
      var minutes = this.context.minutes;
      var seconds = this.context.seconds;
      if (hours < 10) {
        var hours = "0" + hours;
      }
      if (minutes < 10) {
        var minutes = "0" + minutes;
      }
      if (seconds < 10) {
        var seconds = "0" + seconds;
      }

      var today = new Date();
      var dateFormatted =
        today.getFullYear() +
        "-0" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      var startTime =
        dateFormatted + "T" + hours + ":" + minutes + ":" + seconds;

      this.startTime = startTime;
    },

    onContext2(ctx) {
      this.context2 = ctx;
      var hours2 = this.context2.hours;
      var minutes2 = this.context2.minutes;
      var seconds2 = this.context2.seconds;
      if (hours2 < 10) {
        var hours2 = "0" + hours2;
      }
      if (minutes2 < 10) {
        var minutes2 = "0" + minutes2;
      }
      if (seconds2 < 10) {
        var seconds2 = "0" + seconds2;
      }

      var today2 = new Date();
      var dateFormatted2 =
        today2.getFullYear() +
        "-0" +
        (today2.getMonth() + 1) +
        "-" +
        today2.getDate();
      var endTime =
        dateFormatted2 + "T" + hours2 + ":" + minutes2 + ":" + seconds2;

      this.endTime = endTime;
    }
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
    // ,
    // script: [
    //   {
    //     src:
    //       "https://maps.googleapis.com/maps/api/js?key=AIzaSyBTHAlSuxLsCHVuTxJKwSbNRpOdMso6eUU&callback=myMap"
    //   }
    // ]
  },

  computed: {
    currentpage() {
      return this.$route.path;
    },
    ...mapState(["bookingdata"]),
    product() {
      return this.bookingdata.find(el => el.id === this.id);
    },
    bookingsDataFunc() {
      var data = this.bookingdata.find(el => el.id === this.id);
      this.bookingData = data.bookings;
      var finalbookingdata = data.bookings;
      // console.log(this.bookingData);
      return finalbookingdata;
    }
  },

  data() {
    return {
      name: "",
      email: "",
      startTime: "",
      endTime: "",
      activeclass: "active",
      idDisplay:
        this.$route.params.id.charAt(0).toUpperCase() +
        this.$route.params.id.slice(1),
      id: this.$route.params.id,
      data: jsondata,
      context: null,
      context2: null,
      bookingData: null
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
