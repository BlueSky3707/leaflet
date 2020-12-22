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
   var res=[
                0.00549933137239034, // Level 0
                0.00274966568619517, // Level 1
                0.00137483284309758, // Level 2
                0.000687416421548792, // Level 3
                0.000343708210774396, // Level 4
                0.000171854105387198,
                8.5927052693599E-05,
                4.29635263467995E-05,
                2.14817631733998E-05,
                1.07408815866999E-05,
                5.37044079334994E-06,
                2.68522039667497E-06,
                1.34261019833748E-06    
            ];       
       // 关键 定义CRS,即投影          
       var crs = new  L.Proj.CRS('SR-ORG:7408','+proj=longlat +ellps=GRS80 +no_defs',
            {
                resolutions: res,
                // 切片原点
                origin: [118.122911693886,31.2869311022836],
            }
            );
            
      var map = L.map('mapid', {
        crs: crs
      });
      
      var url="http://ip:端口/xx/rest/services/hzsyraster/Mapserver";
      var attrib = "&copy xx";
      var basemap = new L.TileLayer(url+"/tile/{z}/{y}/{x}", {
        tileSize: 256,        
        attribution: attrib
      });                    
      map.addLayer(basemap);
      map.setView([30,120], 4); //设置比例尺和中心点级别
  }
}
</script>
<style scoped>
#mapid {
  width: 100%;
  height: 100vh;
}
</style>

