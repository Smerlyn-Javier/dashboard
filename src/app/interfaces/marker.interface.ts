export interface Marker {
  markerOptions: google.maps.MarkerOptions,
  route: Array<Position>,
  position: Position,
  routeIndex: number,
  id: string,
}
export interface Position {
  lat: number,
  lng: number
}
export interface Icon {
  url: string,
  size: any,
}
