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
  name: "hello"
})
export default class Hello extends Vue {
  // 初始数据可以直接声明为实例的属性
  msg: string = "这是一个vue+typescript项目";
  // 组件方法也可以直接声明为实例的方法
  sayHello(): void {
    console.log(this.msg);
  }
  created() {}
  mounted() {
    var map = L.map("mapid").setView([51.505, -0.09], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09])
      .addTo(map)
      .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
      .openPopup();
  }
}
</script>

