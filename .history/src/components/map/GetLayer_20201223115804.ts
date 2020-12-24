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
  _getLayer = (id: number): any => {
    for (var i = 0; i < this._layers.length; i++) {
      if (this._layers[i] && L.Util.stamp(this._layers[i].layer) === id) {
        return this._layers[i];
      }
    }
  };
  removeLayer = (layer: string) => {
    var id = L.Util.stamp(layer);
    var _layer = this._getLayer(id);
    if (_layer) {
      delete this._layers[this._layers.indexOf(_layer)];
    }
    return this;
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
    _layer.group = {
      name: group,
      id: groupId,
    };

    if (layer.setZIndex) {
      this._lastZIndex++;
      layer.setZIndex(this._lastZIndex);
    }
  };
}
