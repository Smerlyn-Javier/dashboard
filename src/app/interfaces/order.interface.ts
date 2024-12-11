import { Position } from "./marker.interface";

export interface Order {
  destination: string;
  customer: string;
  orderId: string;
  origin: string;
  status: string;
  route:Array<Position>
}

