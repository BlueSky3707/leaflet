import Vue from "vue";
import L from "leaflet";
import "proj4leaflet";
import "proj4";
export default class MapInt {
  static map: any;
  static domid: MapInt;
  static async getInstance() {
    if (!MapInt.map) {
      MapInt.map = MapInt.IntMap(MapInt.domid);
    }
    MapInt.map;
  }
  static async IntMap(divId: any) {
    return L.map(divId, {
      minZoom: 3,
      maxZoom: 14,
      center: [39.550339, 116.114129],
      zoom: 12,
      zoomControl: false,
      attributionControl: false,
      crs: L.CRS.EPSG3857,
    });
  }
}
