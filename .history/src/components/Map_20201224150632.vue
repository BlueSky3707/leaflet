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
import echarts from 'echarts'
// @Component 修饰符注明了此类为一个 Vue 组件

export default {
  components: {
    Map,
  },
  data(){
    return {
     maps:null,

    }
  }
  created() {},
  methods() {
    MapInt.domid = "mapid";
    let geoLayer = null;
    this.maps = MapInt.getInstance();
    LayerUtils.addTileLayer(mapConfig.dtVector);
    LayerUtils.addTileLayer(mapConfig.dtVectorL);
    let fLayer = esri.featureLayer({
      url:
        "http://113.140.66.227:11012/arcgis/rest/services/YA/YA_QXMJH/MapServer/0",
    });
    let newlayer = {
      id: "yaid",
      player: fLayer,
    };
    MapInt.layersArr.push(newlayer);
    this.maps.addLayer(fLayer);
    fLayer.on("click", function(evt) {
      var myStyle = {
        color: "#ff7800",
      };
      if (this.maps.hasLayer(geoLayer)) {
        geoLayer.remove();
      }
      geoLayer = L.geoJSON(evt.layer.feature.geometry, {
        style: myStyle,
      }).addTo(this.maps);
      let newlayer = {
        id: "geoid",
        player: geoLayer,
      };
      let filters = MapInt.layersArr.filter((x) => {
        return x.id === "geoid";
      });
      if (filters.length == 0) {
        MapInt.layersArr.push(newlayer);
      }
      fLayer.bindPopup("<div>弹出框</div>");
      fLayer.openPopup(evt.latlng);
    });
  },
  methods(){
    loadEchart(){
      //创建图层组
      let cMark1=L.marker([51.505, -0.09], {
				icon:L.divIcon({
					className:'leaflet-echart-icon',
					iconSize:[160,160],
					html:'<div id="echart1" style="width:160px;height:160px;position:relative;background-color:red;"></div>'
				})
			}).addTo(this.maps);

    }
  }
};
</script>
<style scoped>
#mapid {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
