import { Component, signal } from '@angular/core';
import { RealTimeTrackingComponent } from './components';
import { DashboardService } from './services';
import { Marker, Order, Truck } from './interfaces';
import { CREATE_MARKET } from './utils';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RealTimeTrackingComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard';
  trucks = signal<Array<Truck>>([]);
  orders = signal<Array<Order>>([]);
  markers = signal<Array<Marker>>([]);
  constructor(private readonly dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getTrucks().forEach((data) => {
      this.trucks.set(data.trucks);
    })

    this.dashboardService.getOrders().forEach((data) => {
      this.orders.set(data.orders);
    })


    let markers = this.orders().map((order) => CREATE_MARKET(order))
    this.markers.set(markers);

  }
}
