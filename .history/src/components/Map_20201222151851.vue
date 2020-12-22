<template>
  <div id="mapid">qqqq</div>
</template>
<script lang="ts">
import Vue from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
//import MapInt from "../components/map/MapInt";
export default class Map extends Vue {
  public map: any;
  created() {}
  mounted() {
    var map = L.map("mapid").setView([51.505, -0.09], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09])
      .addTo(map)
      .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
      .openPopup();
  }
}
</script>

<style>
#mapid {
  width: 100%;
  height: 100vh;
  background-color: red;
}
</style>

