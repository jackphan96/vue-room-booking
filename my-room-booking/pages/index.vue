<template>
  <div>
    <Navbar />

    <!-- <Hero /> -->
    <div id="booking" class="section">
      <div class="section-center">
        <div class="container">
          <div class="row">
            <div class="col-md-7 col-md-push-5">
              <div class="booking-cta">
                <h1>Make your booking</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  facere, soluta magnam consectetur molestias itaque ad sint
                  fugit architecto incidunt iste culpa perspiciatis possimus
                  voluptates aliquid consequuntur cumque quasi. Perspiciatis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <Banner /> -->
    <!--================Banner Area =================-->
    <section class="banner_area">
      <div class="hotel_booking_area position">
        <div class="container">
          <div class="hotel_booking_table">
            <div class="col-md-3">
              <h2>
                Search
                <br />Your Room
              </h2>
            </div>
            <div class="col-md-10">
              <div class="boking_table">
                <div class="row">
                  <div class="col-md-4">
                    <div class="book_tabel_item">
                      <div>
                        <label for="roompicker" style="color:white;"
                          >Select a room</label
                        >
                        <b-form-select
                          v-model="selected"
                          :options="options"
                          class="mb-3"
                          id="roompicker"
                        >
                          <!-- This slot appears above the options from 'options' prop -->
                          <template v-slot:first>
                            <b-form-select-option :value="null" disabled
                              >-- Select a room --</b-form-select-option
                            >
                          </template>

                          <!-- These options will appear after the ones from 'options' prop -->
                          <b-form-select-option value="all"
                            >All Room</b-form-select-option
                          >
                          <b-form-select-option value="small"
                            >Small Meeting Room</b-form-select-option
                          >
                          <b-form-select-option value="medium"
                            >Medium Meeting Room</b-form-select-option
                          >
                          <b-form-select-option value="large"
                            >Big Meeting Room</b-form-select-option
                          >
                        </b-form-select>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class="book_tabel_item">
                      <div>
                        <label for="datepicker-dateformat1" style="color:white;"
                          >Start Date</label
                        >
                        <b-form-datepicker
                          id="datepicker-dateformat1"
                          :date-format-options="{
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit',
                            weekday: 'short'
                          }"
                          locale="en"
                        ></b-form-datepicker>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class="book_tabel_item">
                      <div>
                        <label for="datepicker-dateformat2" style="color:white;"
                          >End Date</label
                        >
                        <b-form-datepicker
                          id="datepicker-dateformat2"
                          :date-format-options="{
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit',
                            weekday: 'short'
                          }"
                          locale="en"
                        ></b-form-datepicker>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================ End Of Banner Area =================-->

    <!--================Card Area =================-->

    <section class="accomodation_area section_gap">
      <div class="container">
        <div class="section_title text-center">
          <h2 class="title_color">Room Booking</h2>
          <p>
            We all live in an age that belongs to the young at heart. Life that
            is becoming extremely fast, fast, fast.
          </p>
        </div>
        <div>
          <div v-if="selected == 'small' || selected == null || selected == 'all'">
            <b-card-group deck class="room-cards">
              <b-card
                title="Small Meeting Room"
                img-src="~/assets/image/meeting-small.jpg"
                img-alt="Image"
                img-top
                img-height="200px"
                img-width="350px"
              >
                <router-link to="/room/small">
                  <a href="room" class="card-link"></a>
                </router-link>
                <b-card-text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </b-card-text>
                <template v-slot:footer>
                  <small class="text-muted">Last updated 3 mins ago</small>
                </template>
              </b-card>
              <b-card
                title="Small Meeting Room"
                img-src="~/assets/image/meeting-small.jpg"
                img-alt="Image"
                img-top
                img-height="200px"
                img-width="350px"
              >
                <router-link to="/room/small">
                  <a href="room" class="card-link"></a>
                </router-link>
                <b-card-text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </b-card-text>
                <template v-slot:footer>
                  <small class="text-muted">Last updated 3 mins ago</small>
                </template>
              </b-card>
              <b-card
                title="Small Meeting Room"
                img-src="~/assets/image/meeting-small.jpg"
                img-alt="Image"
                img-top
                img-height="200px"
                img-width="350px"
              >
                <router-link to="/room/small">
                  <a href="room" class="card-link"></a>
                </router-link>
                <b-card-text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </b-card-text>
                <template v-slot:footer>
                  <small class="text-muted">Last updated 3 mins ago</small>
                </template>
              </b-card>
            </b-card-group>
          </div>

          <div v-if="selected == 'medium' || selected == null || selected == 'all'">
            <b-card-group deck class="room-cards">
              <b-card
                title="Medium Meeting Room"
                img-src="~/assets/image/meeting-medium.jpg"
                img-alt="Image"
                img-top
                img-height="200px"
                img-width="350px"
              >
                <router-link to="/room/medium">
                  <a href="room" class="card-link"></a>
                </router-link>
                <b-card-text
                  >This card has supporting text below as a natural lead-in to
                  additional content.</b-card-text
                >
                <template v-slot:footer>
                  <small class="text-muted">Last updated 3 mins ago</small>
                </template>
              </b-card>
              <b-card
                title="Medium Meeting Room"
                img-src="~/assets/image/meeting-medium.jpg"
                img-alt="Image"
                img-top
                img-height="200px"
                img-width="350px"
              >
                <router-link to="/room/medium">
                  <a href="room" class="card-link"></a>
                </router-link>
                <b-card-text
                  >This card has supporting text below as a natural lead-in to
                  additional content.</b-card-text
                >
                <template v-slot:footer>
                  <small class="text-muted">Last updated 3 mins ago</small>
                </template>
              </b-card>
              <b-card
                title="Medium Meeting Room"
                img-src="~/assets/image/meeting-medium.jpg"
                img-alt="Image"
                img-top
                img-height="200px"
                img-width="350px"
              >
                <router-link to="/room/medium">
                  <a href="room" class="card-link"></a>
                </router-link>
                <b-card-text
                  >This card has supporting text below as a natural lead-in to
                  additional content.</b-card-text
                >
                <template v-slot:footer>
                  <small class="text-muted">Last updated 3 mins ago</small>
                </template>
              </b-card>
            </b-card-group>
          </div>

          <div v-if="selected == 'large' || selected == null || selected == 'all'">
            <b-card-group deck class="room-cards">
              <b-card
                title="Large Meeting Room"
                img-src="~/assets/image/meeting-large.jpg"
                img-alt="Image"
                img-top
                img-height="200px"
                img-width="350px"
              >
                <router-link to="/room/large">
                  <a href="room" class="card-link"></a>
                </router-link>
                <b-card-text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </b-card-text>
                <template v-slot:footer>
                  <small class="text-muted">Last updated 3 mins ago</small>
                </template>
              </b-card>
              <b-card
                title="Large Meeting Room"
                img-src="~/assets/image/meeting-large.jpg"
                img-alt="Image"
                img-top
                img-height="200px"
                img-width="350px"
              >
                <router-link to="/room/large">
                  <a href="room" class="card-link"></a>
                </router-link>
                <b-card-text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </b-card-text>
                <template v-slot:footer>
                  <small class="text-muted">Last updated 3 mins ago</small>
                </template>
              </b-card>
              <b-card
                title="Large Meeting Room"
                img-src="~/assets/image/meeting-large.jpg"
                img-alt="Image"
                img-top
                img-height="200px"
                img-width="350px"
              >
                <router-link to="/room/large">
                  <a href="room" class="card-link"></a>
                </router-link>
                <b-card-text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </b-card-text>
                <template v-slot:footer>
                  <small class="text-muted">Last updated 3 mins ago</small>
                </template>
              </b-card>
            </b-card-group>
          </div>
        </div>
      </div>
    </section>

    <!--================ End Of Card Area =================-->

    <!-- <Map /> -->
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Map from "../components/Map.vue";

export default {
  components: {
    Navbar,
    Map
  },
  methods: {},
  data() {
    return {
      message: "test",
      selected: null,
      selected2: null,
      selected3: null,
      value: ""
    };
  },

  head: {
    title: "Home Page",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto"
      },
      {
        rel: "stylesheet",
        href: "~/assets/style.css"
      }
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.4.1.slim.min.js"
      }
    ]
  }
};
</script>
<style>
.room-cards {
  padding: 14px;
}

.card-link {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
/* =================== HERO ======================== */
.section {
  position: relative;
  height: 90vh;
}

.section .section-center {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

#booking {
  font-family: "Montserrat", sans-serif;
  background-image: url("../assets/image/hero-bg.jpg");
  background-size: cover;
  background-position: center;
}

#booking::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(37, 37, 37, 0.6);
}

.booking-form {
  background-color: #fff;
  padding: 50px 20px;
  -webkit-box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}

.booking-form .form-group {
  position: relative;
  margin-bottom: 30px;
}

.booking-form .form-control {
  background-color: #ebecee;
  border-radius: 4px;
  border: none;
  height: 40px;
  -webkit-box-shadow: none;
  box-shadow: none;
  color: #3e485c;
  font-size: 14px;
}

.booking-form .form-control::-webkit-input-placeholder {
  color: rgba(62, 72, 92, 0.3);
}

.booking-form .form-control:-ms-input-placeholder {
  color: rgba(62, 72, 92, 0.3);
}

.booking-form .form-control::placeholder {
  color: rgba(62, 72, 92, 0.3);
}

.booking-form input[type="date"].form-control:invalid {
  color: rgba(62, 72, 92, 0.3);
}

.booking-form select.form-control {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.booking-form select.form-control + .select-arrow {
  position: absolute;
  right: 0px;
  bottom: 4px;
  width: 32px;
  line-height: 32px;
  height: 32px;
  text-align: center;
  pointer-events: none;
  color: rgba(62, 72, 92, 0.3);
  font-size: 14px;
}

.booking-form select.form-control + .select-arrow:after {
  content: "\279C";
  display: block;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.booking-form .form-label {
  display: inline-block;
  color: #3e485c;
  font-weight: 700;
  margin-bottom: 6px;
  margin-left: 7px;
}

.booking-form .submit-btn {
  display: inline-block;
  color: #fff;
  background-color: #1e62d8;
  font-weight: 700;
  padding: 14px 30px;
  border-radius: 4px;
  border: none;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.booking-form .submit-btn:hover,
.booking-form .submit-btn:focus {
  opacity: 0.9;
}

.booking-cta {
  margin-top: 80px;
  margin-bottom: 30px;
}

.booking-cta h1 {
  font-size: 52px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 700;
}

.booking-cta p {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
}
/* =================== END OF HERO ======================== */

/*---------------------------------------------------- */
/*----------------------------------------------------*/
/*============= Start banner_area css =============*/

.banner-selection {
  color: aqua;
}

.banner_area {
  background: #04091e;
  position: relative;
  z-index: 1;
}

/* .banner_area .bg-parallax {
  background: url("../assets/image/hero-bg.jpg") no-repeat scroll center 0 / cover;
  opacity: 0.5;
} */

.banner_area .position {
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
}

.booking_table {
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 800px;
}

.overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 125%;
  bottom: 0;
  z-index: -1;
}

.banner_content {
  color: #fff;
  margin-bottom: 94px;
}

.banner_content h6 {
  font-size: 14px;
  line-height: 30px;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  font-weight: 400;
}

.banner_content h2 {
  font-size: 60px;
  line-height: 60px;
  font-weight: 700;
}

.banner_content p {
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  padding: 10px 0px 20px;
}

/*============= End banner_area css =============*/
.hotel_booking_table {
  background: #04091e;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 40px 30px 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.hotel_booking_table h2 {
  font-size: 24px;
  line-height: 30px;
  color: #fff;
  text-transform: uppercase;
}

.boking_table {
  margin-left: -50px;
}

.book_tabel_item .form-group {
  margin-bottom: 0px;
}

.book_tabel_item .form-group .input-group {
  position: relative;
}

.book_tabel_item .form-group .input-group .form-control {
  border: 1px solid #2b3146;
  background: transparent;
  border-radius: 0px;
  font-size: 13px;
  line-height: 38px;
  padding: 0px 20px;
  color: #777777;
  z-index: 0;
}

.book_tabel_item .form-group .input-group .form-control.placeholder {
  color: #777777;
}

.book_tabel_item .form-group .input-group .form-control:-moz-placeholder {
  color: #777777;
}

.book_tabel_item .form-group .input-group .form-control::-moz-placeholder {
  color: #777777;
}

.book_tabel_item
  .form-group
  .input-group
  .form-control::-webkit-input-placeholder {
  color: #777777;
}

.book_tabel_item .form-group .input-group .form-control:focus {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.book_tabel_item .form-group .input-group .input-group-addon {
  background: transparent;
  padding: 0px;
  border: 0px;
  position: absolute;
  right: 20px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  color: #777777;
  z-index: 2;
}

.book_tabel_item .input-group {
  margin-bottom: 10px;
}

.book_tabel_item .nice-select {
  background: transparent;
  border-radius: 0px;
  border: 1px solid #2b3146;
  font-size: 13px;
  line-height: 40px;
  height: 40px;
  color: #777;
}

.book_tabel_item .nice-select:after {
  content: "\e874";
  font-family: "Linearicons-Free";
  font-size: 13px;
  color: #777777;
  border: 0px;
  top: 0;
  margin-top: 0px;
  right: 20px;
  -webkit-transform: rotate(0);
  -ms-transform: rotate(0);
  transform: rotate(0);
  -webkit-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
}
/*============= End banner_area css =============*/

/* Card style */
.accomodation_item {
  margin-bottom: 30px;
}

.accomodation_item .hotel_img {
  position: relative;
  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 10px;
}

.accomodation_item .hotel_img img {
  -webkit-transition: all 0.4s linear;
  -o-transition: all 0.4s linear;
  transition: all 0.4s linear;
}

.accomodation_item .hotel_img .theme_btn {
  position: absolute;
  bottom: 20px;
  left: 50%;
  -webkit-transform: translate(-50%);
  -ms-transform: translate(-50%);
  transform: translate(-50%);
  padding: 5px 25px;
  max-width: 128px;
}

.accomodation_item .hotel_img:hover img {
  -webkit-transform: scale(1.19);
  -ms-transform: scale(1.19);
  transform: scale(1.19);
}

.accomodation_item h5 {
  font-size: 24px;
  line-height: 28px;
  color: #52c5fd;
  font-weight: 600;
  margin-bottom: 0px;
}

.accomodation_item h5 small {
  font-weight: 300;
  font-size: 14px;
}

.sec_h4 {
  font-size: 18px;
  line-height: 38px;
  font-weight: 600;
  color: #222222;
  margin-bottom: 0px;
}

.accomodation_two {
  margin-bottom: -40px;
}

.accomodation_two .accomodation_item {
  margin-bottom: 45px;
}

.section_gap {
  padding: 100px 0;
}
/* End of Card style */
</style>
