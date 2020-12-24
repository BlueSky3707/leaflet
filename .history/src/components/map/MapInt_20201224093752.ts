import Vue from "vue";
import L from "leaflet";
import "proj4leaflet";
import "proj4";
export default class MapInt {
  static maps: L.Map;
  static domid: string;
  static layersArr: any[] = [];
  static layerInfo: {};
  static getInstance = (): L.Map => {
    if (!MapInt.maps) {
      MapInt.maps = MapInt.IntMap(MapInt.domid);
    }
    return MapInt.maps;
  };

  static IntMap = (divId: string): L.Map => {
    return L.map(divId, {
      minZoom: 3,
      maxZoom: 14,
      center: [34.27, 108.95],
      zoom: 12,
      zoomControl: false,
      attributionControl: false,
      crs: L.CRS.EPSG4326,
    });
  };
}
