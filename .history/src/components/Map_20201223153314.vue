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
import mapConfig from "../components/map/mapConfig";
import LayerUtils from "../components/map/LayerUtils";

// @Component 修饰符注明了此类为一个 Vue 组件
var esri = require("esri-leaflet");
export default {
  components: {
    Map,
  },
  created() {},
  mounted() {
    MapInt.domid = "mapid";
    let maps = MapInt.getInstance();
    LayerUtils.addTileLayer(mapConfig.dtVector);
    LayerUtils.addTileLayer(mapConfig.dtVectorL);
    console.log(esri);
    let envLayer = esri.DynamicMapLayer({
      url:
        "http://113.140.66.227:11012/arcgis/rest/services/YA/YA_QXMJH/MapServer",
      opacity: 0.7,
    });
    maps.addLayer(envLayer);
  },
};
</script>
<style scoped>
#mapid {
  width: 100%;
  height: 100vh;
}
</style>
