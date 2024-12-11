import { Component } from '@angular/core';
import { RealTimeTrackingComponent } from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RealTimeTrackingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard';
}
