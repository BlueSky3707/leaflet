<template>
  <div class="hello"
       id="mapid">
  </div>
</template>
<script >
import Vue from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "proj4leaflet";
import "proj4";
import MapInt from "../components/map/MapInt";
// @Component 修饰符注明了此类为一个 Vue 组件

export default {
  components: {
    Map,
  },
  created() {},
  mounted() {
    MapInt.domid = "mapid";
    let map = MapInt.getInstance();
    var url =
      "http://10.61.3.142:6080/arcgis/rest/services/TDTSxBaseMap_XX/MapServer";
    var attrib = "&copy xx";
    var basemap = new L.TileLayer(url + "/tile/{z}/{y}/{x}", {
      tileSize: 256,
      attribution: attrib,
    });
    map.addLayer(basemap);
    console.log(L.Util.stamp(basemap));
    console.log(L.Util.stamp(basemap));
    map.setView([34.27, 108.95], 8); //设置比例尺和中心点级别
  },
};
</script>
<style scoped>
#mapid {
  width: 100%;
  height: 100vh;
}
</style>
