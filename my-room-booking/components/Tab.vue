<template>
  <div>
    <section>
      <div class="container body-tab">
        <div class="section_title text-center">
          <h2 class="title_color">Room Booking</h2>
          <p>
            We all live in an age that belongs to the young at heart. Life that
            is becoming extremely fast,
          </p>
        </div>

        <b-tabs pills card vertical>
          <b-tab title="Tab 1" active>
            <Map />

            <!-- <div class="floor-plan-bg" >
              <b-container fluid>
                <b-row class="floor-plan-row">
                  <b-col class="floor-plan-col">1 of 3</b-col>
                  <b-col class="floor-plan-col">2 of 3</b-col>
                  <b-col class="floor-plan-col">3 of 3</b-col>
                </b-row>
                <b-row class="floor-plan-row">
                  <b-col class="floor-plan-col">1 of 3</b-col>
                  <b-col class="floor-plan-col">2 of 3</b-col>
                  <b-col class="floor-plan-col">3 of 3</b-col>
                </b-row>
                <b-row class="floor-plan-row">
                  <b-col class="floor-plan-col">1 of 3</b-col>
                  <b-col class="floor-plan-col">2 of 3</b-col>
                  <b-col class="floor-plan-col">3 of 3</b-col>
                </b-row>
              </b-container>
            </div>-->
          </b-tab>

          <b-tab title="Tab 2">
            <b-card-text>Tab contents 2</b-card-text>
          </b-tab>
          <b-tab title="Tab 3">
            <b-card-text>Tab contents 3</b-card-text>
          </b-tab>
        </b-tabs>
      </div>
    </section>
  </div>
</template>

<script>
import Map from "./Map.vue";

export default {
  component: {
    Map
  }
};
</script>

<style>
.body-tab {
  padding: 100px 0;
}

.floor-plan-bg {
  background-image: "url(https://vuejs.org/images/logo.png)";
  /* style="{'background-image':'url(https://vuejs.org/images/logo.png)'} */
}

.floor-plan-row .floor-plan-col {
  padding: 50px;
  border: 1px solid;
}
</style>