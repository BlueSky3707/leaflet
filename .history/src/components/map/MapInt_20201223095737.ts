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
      alert();
    }
    MapInt.map;
  }
  static async IntMap(divId: any) {
    return L.map(divId, {
      minZoom: 3,
      maxZoom: 14,
      center: [34.27, 108.95],
      zoom: 12,
      zoomControl: false,
      attributionControl: false,
      crs: L.CRS.EPSG4326,
    });
  }
}
