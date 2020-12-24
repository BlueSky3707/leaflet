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
      echartLayer: "",
    };
  },
  created() {},
  mounted() {
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
            '<div id="echart1" style="width:90px;height:90px;position:relative;background-color:transparent;"></div>',
        }),
      });
      let pMark2 = L.marker([36.919542, 109.159537], {
        icon: L.divIcon({
          className: "leaflet-echart-icon",
          iconSize: [160, 160],
          html:
            '<div id="echart2" style="width:90px;height:90px;position:relative;background-color:transparent;"></div>',
        }),
      });
      if (this.maps.hasLayer(this.echartLayer)) {
        this.echartLayer.remove();
      }
      this.echartLayer = L.layerGroup([pMark1, pMark2]).addTo(this.maps);
      let newlayer = {
        id: "echartis",
        player: this.echartLayer,
      };
      MapInt.layersArr.push(newlayer);
      let myChart = echarts.init(document.getElementById("echart1"));
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
      myChart.setOption(option);
      //第二个
      let myChart2 = echarts.init(document.getElementById("echart2"));
      let option2 = {
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
      myChart2.setOption(option2);
      console.log(MapInt.layersArr);
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
