<template>
  <div>
    <!-- <p>Hi from {{ name }}</p>
    <NLink to="/">
      Home page
    </NLink> -->
    <Calendar />
  </div>
</template>

<script>
import Calendar from "../components/Calendar.vue";

export default {
  components: {
    Calendar
  },

  asyncData () {
    return {
      name: process.static ? 'static' : (process.server ? 'server' : 'client')
    }
  },
  head: {
    title: 'About page'
  }
}
</script>
