<template>
  <div class="hello"
       id="mapid">
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
// @Component 修饰符注明了此类为一个 Vue 组件
@Component({
  name: "Map"
})
export default class Hello extends Vue {
  sayHello(): void {}
  created() {}
  mounted() {
    var mymap = L.map("mapid").setView([31.59, 120.29], 7);
    
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

