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
import * as esri from "esri-leaflet";
// @Component 修饰符注明了此类为一个 Vue 组件

export default {
  components: {
    Map,
  },
  created() {},
  mounted() {
    MapInt.domid = "mapid";
    let geoLayer = null;

    let maps = MapInt.getInstance();
    LayerUtils.addTileLayer(mapConfig.dtVector);
    LayerUtils.addTileLayer(mapConfig.dtVectorL);
    let fLayer = esri.featureLayer({
      url:
        "http://113.140.66.227:11012/arcgis/rest/services/YA/YA_QXMJH/MapServer/0",
    });

    let newlayer = {
      id: "yaid",
    };
    MapInt.layersArr.push(newlayer);

    maps.addLayer(fLayer);
    fLayer.on("click", function(evt) {
      var myStyle = {
        color: "#ff7800",
      };
      if (maps.hasLayer(geoLayer)) {
        geoLayer.remove();
      }
      geoLayer = L.geoJSON(evt.layer.feature.geometry, {
        style: myStyle,
      }).addTo(maps);
      let newlayer = {
        id: "geoid",
      };
      let filters = MapInt.layersArr.filter((x) => {
        return x.id === "geoid";
      });
      if (filters.length == 0) {
        MapInt.layerInfo.id = "geoid";
        MapInt.layersArr.push(layerInfo);
      }
      console.log(MapInt.layersArr);
      fLayer.bindPopup("<div>弹出框</div>");
      fLayer.openPopup(evt.latlng);
    });
  },
};
</script>
<style scoped>
#mapid {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
