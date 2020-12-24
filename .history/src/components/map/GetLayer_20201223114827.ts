import L from "leaflet";
export default class GetLayer {
  _layers: any[] = [];
  _lastZIndex = 0;
  _groupList: any[] = [];
  _indexOf = (arr: Array<any>, obj: any): number => {
    for (var i = 0, j = arr.length; i < j; i++) {
      if (arr[i] === obj) {
        return i;
      }
    }
    return -1;
  };
  getLayerById = (id: string): any => {
    return null;
  };
  addLayer = (layer: any, name: string, group: any, overlay: any) => {
    let id = L.Util.stamp(layer);

    let _layer: any = {
      layer: layer,
      name: name,
      overlay: overlay,
    };
    this._layers.push(_layer);

    group = group || "";
    let groupId = this._indexOf(this._groupList, group);

    if (groupId === -1) {
      groupId = this._groupList.push(group) - 1;
    }
  };
}
