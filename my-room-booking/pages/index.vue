<template>
  <div>
    <Navbar />
    <Hero />
    <Banner />
    <Body />
    <Calendar />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import Banner from '../components/Banner.vue'
import Body from '../components/Body.vue'
import Calendar from '../components/Calendar.vue'
export default {

  components: {
    Navbar,
    Hero,
    Banner,
    Body,
    Calendar
  },

  data() {
    return {
      message: "assaa"
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
        rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto"
      },
      {
        rel: "stylesheet", href: "~/assets/style.css"
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
<style></style>
