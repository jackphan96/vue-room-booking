<template>
  <div class="floor-plan-map">
    <h1>Floor Plan</h1>
    <div id="googleMap" style="width:100%;height:500px;"></div>
    <script>
  function myMap() {
    var mapProp = {
      center: new google.maps.LatLng(1.279478, 103.853624),
      zoom: 21
    };
    var map = new google.maps.Map(
      document.getElementById("googleMap"),
      mapProp
    );

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(1.279478, 103.853624),
      title: "Hello World!"
    });
    marker.setMap(map);
  }
    </script>



  </div>
</template>

<script>
export default {
  head: {
    link: [{}],
    script: [
      {
        src:
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyBTHAlSuxLsCHVuTxJKwSbNRpOdMso6eUU&callback=myMap"
      }
    ]
  }
};
</script>

<style>
#mazemap-map {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
}

.floor-plan-map {
  padding-bottom: 75px;
}
</style>