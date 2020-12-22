<template>
  <div class="hello"
       id="mapid">
  </div>
</template>
<script >
import Vue from "vue";
import Component from "vue-class-component";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import 'proj4leaflet';
import "proj4"
// @Component 修饰符注明了此类为一个 Vue 组件
@Component({
  name: "Map"
})
export default class Hello extends Vue {

  created() {}
  mounted() {
    var mymap = L.map("mapid").setView([31.59, 120.29], 7);
    var crs = new L.Proj.CRS('EPSG:2400',
  '+lon_0=15.808277777799999 +lat_0=0.0 +k=1.0 +x_0=1500000.0 ' +
  '+y_0=0.0 +proj=tmerc +ellps=bessel +units=m ' +
  '+towgs84=414.1,41.3,603.1,-0.855,2.141,-7.023,0 +no_defs',
  {
    resolutions: [8192, 4096, 2048] // 3 example zoom level resolutions
  }
);
    L.tileLayer(
      "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}",
      {
        maxZoom: 12,
        minZoom: 4,
        pane: "overlayPane"
      }
    ).addTo(mymap);
  }
}
</script>
<style scoped>
#mapid {
  width: 100%;
  height: 100vh;
}
</style>

