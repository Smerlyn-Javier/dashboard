import { Marker, Order } from "../interfaces";


export const CREATE_MARKET = (data: Order): Marker => {
  let marker: Marker = {
    markerOptions: {
      icon: {
        url: '../../assets/images/truck-marker.png',
      },
      draggable: false,
    },
    route:data.route,
    id: data.orderId,
    routeIndex:0,
    position:data.route[0]
  }
  return marker;
}

