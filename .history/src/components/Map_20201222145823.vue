<template>
  <div id="mapid"></div>
</template>

<script lang="ts">
import Vue from "vue";
import L from "leaflet";
//import MapInt from "../components/map/MapInt";
export default class Map extends Vue {
  created() {}
  mounted() {
    let map = L.map("mapid", {
      minZoom: 3,
      maxZoom: 14,
      center: [39.550339, 116.114129],
      zoom: 12,
      zoomControl: false,
      attributionControl: false,
      crs: L.CRS.EPSG3857
    });

    L.tileLayer(
      "http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}"
    ).addTo(map);
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

