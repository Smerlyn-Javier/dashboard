import { Component, signal } from '@angular/core';
import { RealTimeTrackingComponent } from './components';
import { DashboardService } from './services';
import { Marker, Order, Truck } from './interfaces';
import { CREATE_MARKET } from './utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RealTimeTrackingComponent],
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
    this.trucks.set(this.dashboardService.getTrucks());
    this.orders.set(this.dashboardService.getOrders());

      let markers = this.orders().map((order) => CREATE_MARKET(order))
      this.markers.set(markers);

  }
}
