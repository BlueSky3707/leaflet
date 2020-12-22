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
    var mymap = L.map("mapid", {
      minZoom: 3,
      maxZoom: 14,
      zoom: 12,
      zoomControl: false,
      attributionControl: false,
      crs: L.CRS.EPSG3857
    }).setView([31.59, 120.29], 7);

    L.tileLayer(
      "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}",
      {
        maxZoom: 12,
        minZoom: 4,
        pane: "overlayPane"
      }
    ).addTo(mymap);
    console.log(mymap);
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

