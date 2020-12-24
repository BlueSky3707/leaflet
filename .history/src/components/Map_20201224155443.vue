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
import echarts from "echarts";
// @Component 修饰符注明了此类为一个 Vue 组件

export default {
  components: {
    Map,
  },
  data() {
    return {
      maps: "",
    };
  },
  created() {},
  mounted() {
    console.log(echarts);
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
    let that = this;
    fLayer.on("click", function(evt) {
      var myStyle = {
        color: "#ff7800",
      };
      if (that.maps.hasLayer(geoLayer)) {
        geoLayer.remove();
      }
      geoLayer = L.geoJSON(evt.layer.feature.geometry, {
        style: myStyle,
      }).addTo(that.maps);
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
    this.loadEchartLayer();
  },
  methods: {
    loadEchartLayer() {
      let pMark1 = L.marker([36.977493, 108.116018], {
        icon: L.divIcon({
          className: "leaflet-echart-icon",
          iconSize: [160, 160],
          html:
            '<div id="echart1" style="width:900px;height:900px;position:relative;background-color:transparent;"></div>',
        }),
      }).addTo(this.maps);
      console.log(echarts);
      //let m.lyChart = echarts.init(document.getElementById("echart1"));
      let option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(220, 220, 220, 0.8)",
            },
          },
        ],
      };
      //myChart.setOption(option);
    },
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
