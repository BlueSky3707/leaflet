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
import "proj4"
// @Component 修饰符注明了此类为一个 Vue 组件

export default  {
  components:{
    Map
  },
  created() {},
  mounted(){
    var res=[
           0.7031250000000002, // Level 0
           0.3515625000000001, // Level 1
               0.17578125000000006, // Level 2
                0.08789062500000003, // Level 3
                 0.043945312500000014, // Level 4
               0.021972656250000007,
                0.010986328125000003,
               0.005493164062500002,
                0.002746582031250001,
                 0.0013732910156250004,
                6.866455078125002E-4,
                3.433227539062501E-4,
                1.7166137695312505E-4,
                8.583068847656253E-5,
                 4.2915344238281264E-5,
                  2.1457672119140632E-5,
                  1.0728836059570316E-5,
                   5.364418029785158E-6       
            ];       
       // 关键 定义CRS,即投影          
       var crs = new L.Proj.CRS('SR-ORG:4326','+proj=longlat +ellps=GRS80 +no_defs',
            {
                resolutions: res,
                // 切片原点
                origin: [-180,90],
            }
            );     
      var map = L.map('mapid', {
        crs: crs
      });
      var url="http://10.61.3.142:6080/arcgis/rest/services/TDTSxBaseMap_XX/MapServer";
      var attrib = "&copy xx";
      var basemap = new L.TileLayer(url+"/tile/{z}/{y}/{x}", {
        tileSize: 256,        
        attribution: attrib
      });                    
      map.addLayer(basemap);
      map.setView([34.27,108.95], 8); //设置比例尺和中心点级别
  }
}
</script>
<style scoped>
#mapid {
  width: 100%;
  height: 100vh;
}
</style>

