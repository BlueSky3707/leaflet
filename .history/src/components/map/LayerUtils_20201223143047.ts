import MapInt from "../map/MapInt";
import L from "leaflet";
export default class LayerUtils {
  static attrib: string = "&copy xx";
  static addTileLayer = (url: string) => {
    let basemap = new L.TileLayer(url + "/tile/{z}/{y}/{x}", {
      tileSize: 256,
      attribution: LayerUtils.attrib,
    });
    MapInt.getInstance().addLayer(basemap);
  };
}
